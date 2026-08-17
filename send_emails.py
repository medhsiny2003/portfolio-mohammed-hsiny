import os
import smtplib
import time
import getpass
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders

# ==============================================================================
# CONFIGURATION
# ==============================================================================

# Votre adresse email d'expédition (Gmail recommandé)
SENDER_EMAIL = "Mohammedhsiny2@gmail.com"

# Objet de l'email
SUBJECT = "Candidature Stage PFE (Janvier 2027) – Systèmes Embarqués & Drones – Mohammed HSINY"

# Liste des pièces jointes (fichiers à placer dans le même dossier que le script)
ATTACHMENTS = [
    "Med_hsiny_cv.pdf",
    "Med Hsiny — Portfolio  PFE.pdf"
]

# Liste des destinataires nettoyée avec leur prénom personnalisé
RECIPIENTS = [
    {"name": "Jean-Christophe", "email": "jean-christophe.charlaix@harmattan.ai"},
    {"name": "Jean-Arnold", "email": "jean-arnold.chenilleau@harmattan.ai"},
    {"name": "Edouard", "email": "edouard.rosset@harmattan.ai"},
    {"name": "Kiara", "email": "kiara.mayet@harmattan.ai"},
    {"name": "Amir", "email": "amir.benmahjoub@harmattan.ai"},
    {"name": "Mikey", "email": "mikey.omahoney@harmattan.ai"},
    {"name": "Josselin", "email": "josselin.delabroise@harmattan.ai"},
    {"name": "Clémence", "email": "clemence.pasquiou@harmattan.ai"},
    {"name": "Justin", "email": "justin.chambers@harmattan.ai"},
    {"name": "Charlotte", "email": "charlotte.colson@harmattan.ai"},
    {"name": "Simon", "email": "simon.landy@harmattan.ai"},
    {"name": "Jason", "email": "jason.delabays@harmattan.ai"},
    {"name": "Charles", "email": "charles.pecheux@harmattan.ai"},
    {"name": "Hadi", "email": "hadi.abinader@harmattan.ai"},
    {"name": "Abdelhafid", "email": "abdelhafid.mordi@harmattan.ai"},
    {"name": "Jean-Patrice", "email": "jean-patrice.coste@harmattan.ai"},
    {"name": "Alexandre", "email": "alexandre.marsolais@harmattan.ai"}
]

# Modèle du message ({prenom} sera automatiquement remplacé)
MESSAGE_TEMPLATE = """Bonjour {prenom},

Je m'appelle Mohammed HSINY, étudiant ingénieur à la FST Mohammedia, actuellement basé au Maroc. Je recherche un stage de fin d'études en France à partir de janvier 2027, dans le domaine des systèmes embarqués, de la robotique autonome et des drones.

Harmattan AI est particulièrement l'entreprise que je souhaite rejoindre. Passionné par les technologies avancées et l'innovation industrielle, je porte également un fort intérêt pour l'industrie de défense, notamment pour les systèmes autonomes et les technologies développées pour des environnements exigeants.

Au cours de mes projets, j'ai notamment conçu un drone d'inspection de lignes haute tension intégrant ArduPilot et YOLO, et assemblé un drone FPV 7" de A à Z. Ces expériences m'ont permis de développer des compétences pratiques en systèmes embarqués, drones, intégration matérielle, programmation et vision par ordinateur.

Je souhaite aujourd'hui mettre ces compétences au service de projets concrets et continuer à progresser auprès d'une équipe expérimentée.

Vous trouverez mon CV en pièce jointe ainsi que mon portfolio.

Je serais ravi de pouvoir échanger avec vous au sujet d'une éventuelle opportunité au sein d'Harmattan AI.

Cordialement,
Mohammed HSINY
+212611424571 / Mohammedhsiny2@gmail.com
"""

# ==============================================================================
# FONCTIONS UTILITAIRES
# ==============================================================================

def check_attachments(attachments):
    """Vérifie que tous les fichiers joints existent avant de lancer l'envoi."""
    missing = []
    for filepath in attachments:
        if not os.path.exists(filepath):
            missing.append(filepath)
    return missing

def create_email(sender, recipient_email, recipient_name, subject, body, attachments):
    """Construit l'objet MIMEMultipart avec le corps de texte et les pièces jointes."""
    msg = MIMEMultipart()
    msg['From'] = f"Mohammed HSINY <{sender}>"
    msg['To'] = recipient_email
    msg['Subject'] = subject

    # Personnalisation du corps du texte
    personalized_body = body.format(prenom=recipient_name)
    msg.attach(MIMEText(personalized_body, 'plain', 'utf-8'))

    # Ajout des pièces jointes
    for filepath in attachments:
        filename = os.path.basename(filepath)
        try:
            with open(filepath, "rb") as f:
                part = MIMEBase("application", "octet-stream")
                part.set_payload(f.read())
                encoders.encode_base64(part)
                # Encodage du nom de fichier pour supporter les caractères spéciaux / espaces
                part.add_header(
                    "Content-Disposition",
                    f'attachment; filename="{filename}"'
                )
                msg.attach(part)
        except Exception as e:
            print(f"[-] Erreur lors de l'attachement de {filepath}: {e}")
            raise e

    return msg

# ==============================================================================
# SCRIPT PRINCIPAL
# ==============================================================================

def main():
    print("=" * 60)
    print("🚀 SCRIPT D'ENVOI D'EMAILS DE CANDIDATURE PERSONNALISÉS")
    print("=" * 60)

    # 1. Vérification des pièces jointes
    missing_files = check_attachments(ATTACHMENTS)
    if missing_files:
        print("\n❌ ERREUR : Les fichiers suivants sont introuvables :")
        for f in missing_files:
            print(f"   - {f}")
        print("\n👉 Assurez-vous de placer ces fichiers dans le même dossier que le script.")
        return

    print(f"✅ Pièces jointes vérifiées ({len(ATTACHMENTS)} fichiers trouvés).")
    print(f"📋 Total de destinataires : {len(RECIPIENTS)}")

    # 2. Récupération sécurisée du mot de passe d'application
    print("\n🔐 Authentification SMTP (Gmail)")
    print("💡 Astuce : Utilisez un 'Mot de passe d'application' Google (16 caractères), pas votre mot de passe habituel.")
    app_password = os.environ.get("EMAIL_APP_PASSWORD")
    if not app_password:
        app_password = getpass.getpass(prompt="Entrez votre mot de passe d'application Gmail : ").strip()

    if not app_password:
        print("❌ Le mot de passe ne peut pas être vide.")
        return

    # 3. Confirmation avant envoi
    confirm = input(f"\n❓ Voulez-vous envoyer les {len(RECIPIENTS)} emails maintenant ? (o/N) : ").strip().lower()
    if confirm not in ['o', 'oui', 'y', 'yes']:
        print("🛑 Envoi annulé par l'utilisateur.")
        return

    # 4. Connexion au serveur SMTP
    smtp_server = "smtp.gmail.com"
    smtp_port = 587

    try:
        print("\n⏳ Connexion au serveur SMTP de Gmail...")
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.ehlo()
        server.starttls()
        server.login(SENDER_EMAIL, app_password)
        print("✅ Connexion SMTP établie avec succès !\n")
    except Exception as e:
        print(f"\n❌ Échec de la connexion SMTP : {e}")
        print("👉 Vérifiez que vous utilisez bien un mot de passe d'application et que l'accès 2FA est activé.")
        return

    # 5. Boucle d'envoi individuel
    success_count = 0
    failed_recipients = []

    try:
        for index, recipient in enumerate(RECIPIENTS, start=1):
            name = recipient["name"]
            email = recipient["email"]

            print(f"[{index}/{len(RECIPIENTS)}] Envoi à {name} ({email})...", end=" ", flush=True)

            try:
                msg = create_email(
                    sender=SENDER_EMAIL,
                    recipient_email=email,
                    recipient_name=name,
                    subject=SUBJECT,
                    body=MESSAGE_TEMPLATE,
                    attachments=ATTACHMENTS
                )
                server.sendmail(SENDER_EMAIL, email, msg.as_string())
                print("✅ Envoyé !")
                success_count += 1
            except Exception as e:
                print(f"❌ Échec ({e})")
                failed_recipients.append({"recipient": recipient, "error": str(e)})

            # Pause de 3 secondes entre chaque envoi
            if index < len(RECIPIENTS):
                time.sleep(3)

    except KeyboardInterrupt:
        print("\n⚠️ Interruption par l'utilisateur.")
    finally:
        server.quit()
        print("\n🔌 Connexion SMTP fermée.")

    # 6. Résumé
    print("\n" + "=" * 60)
    print(f"📊 RÉSUMÉ DES ENVOIS :")
    print(f"   - Réussis : {success_count}/{len(RECIPIENTS)}")
    print(f"   - Échoués : {len(failed_recipients)}/{len(RECIPIENTS)}")

    if failed_recipients:
        print("\n⚠️ Liste des échecs :")
        for failed in failed_recipients:
            print(f"   - {failed['recipient']['name']} ({failed['recipient']['email']}) : {failed['error']}")
    print("=" * 60)

if __name__ == "__main__":
    main()
