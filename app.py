
from flask import Flask, render_template, abort

app = Flask(__name__)

SLIDES = [
    {
        "id": 1,
        "eyebrow": "FRIENDSHIP_RECOVERY.PY",
        "title": "מבצע: לא להיות בריב",
        "subtitle": "לא מבקשת שנהיה בסטיז. מבקשת להפסיק להיות צפון ודרום קוריאה.",
        "tag": "boot sequence",
        "image": "dmz_peace.svg",
        "image_class": "dmz-art",
        "accent": "pink"
    },
    {
        "id": 2,
        "eyebrow": "CURRENT_STATE.LOG",
        "title": "הבעיה",
        "bullets": [
            "היה ריב ❌",
            "נאמרו דברים ❌",
            "האווירה: ✨לא נעימה✨",
            "אני מסתכלת אחורה ואומרת: וואלה, יכולתי להתנהל יותר טוב."
        ],
        "tag": "status: awkward",
        "image": "jellyfish.svg",
        "image_class": "art-lg art-bottom-left drift",
        "accent": "blue"
    },
    {
        "id": 3,
        "eyebrow": "POSTMORTEM.md",
        "title": "לקיחת אחריות",
        "body": "לאחר בדיקה פנימית מקיפה של ההנהלה, נמצא כי:",
        "highlight": "אני טעיתי.",
        "footer": "הדירקטוריון עודכן. האחראים ננזפו. האחראית היא אני.",
        "tag": "root cause found",
        "image": "strawberry_bug.svg",
        "image_class": "art-md art-top-left tilt-left",
        "accent": "red"
    },
    {
        "id": 4,
        "eyebrow": "SCOPE_CHECK.ts",
        "title": "חשוב להבהיר",
        "bullets": [
            "❌ ניסיון להפוך אותנו לבסטיז עד יום שלישי",
            "❌ בקשה לצמיד חברות",
            "❌ “בואי נשכח שהכול קרה 🥰”",
            "❌ חוזה ל־10 שנות חברות עם אופציה להארכה"
        ],
        "tag": "no surprise dependencies",
        "image": "black_cat.svg",
        "image_class": "art-lg art-right-center peek",
        "accent": "lavender"
    },
    {
        "id": 5,
        "eyebrow": "REQUEST.json",
        "title": "אז מה אני כן רוצה?",
        "highlight": "יחסים דיפלומטיים.",
        "body": "לא צריך לפתוח שגרירות. לא צריך סחר חופשי. מספיק שלא תהיה מלחמה בגבול.",
        "tag": "minimum viable peace",
        "image": "flower_mail.svg",
        "image_class": "art-xl art-bottom-left tilt-right",
        "accent": "pink"
    },
    {
        "id": 6,
        "eyebrow": "MVP_SPEC.yml",
        "title": "ההצעה שלי",
        "bullets": [
            "שלום אם וכשנפגשות",
            "בלי אנרגיה מוזרה",
            "אפשרות להיות באותו חדר בלי שמישהו ירגיש שהוא בפרק איחוד של ריאליטי",
            "אופציונלי בעתיד: צחוק אחד משותף / משחק בדיסקורד"
        ],
        "tag": "v0.1 — intentionally tiny",
        "image": "berry_terminal.svg",
        "image_class": "art-lg art-bottom-left bob",
        "accent": "blue"
    },
    {
        "id": 7,
        "eyebrow": "NO_JOKES_FOR_30_SEC",
        "title": "התנצלות, הפעם בלי בדיחות",
        "body": "באמת חשוב לי להגיד שאני מצטערת על החלק שלי במה שקרה. אני מבינה שפגעתי בך / התנהלתי לא נכון, ואני לא מצפה שההתנצלות הזאת תמחק את זה. פשוט היה לי חשוב לקחת אחריות ולהגיד לך את זה כמו שצריך.",
        "tag": "sincere mode",
        "image": "heart_patch.svg",
        "image_class": "art-md art-top-left pulse-soft",
        "accent": "red"
    },
    {
        "id": 8,
        "eyebrow": "ROADMAP.csv",
        "title": "התחזית העסקית",
        "bullets": [
            "פחות מביך",
            "שלום אם נתקלות אחת בשניה",
            "אולי איזה חחח",
            "מי יודע, השוק תנודתי"
        ],
        "tag": "forecast confidence: lol",
        "image": "planet_chart.svg",
        "image_class": "art-xl art-left-center rotate-slow",
        "accent": "lavender"
    },
    {
        "id": 9,
        "eyebrow": "MERGE_REQUEST #1",
        "title": "אני מבקשת סליחה, לא מחיקת העבר.",
        "body": "אשמח שנוכל להיות בטוב, גם אם ה״טוב״ הזה פשוט אומר:",
        "highlight": "אנחנו סבבה. אין ביף. אפשר להתקדם בחיים.",
        "footer": "שאלות? דאגות? הצעה נגדית? הבמה שלך.",
        "tag": "awaiting review",
        "image": "peace_commit.svg",
        "image_class": "art-lg art-bottom-left wiggle",
        "accent": "pink"
    },
]

@app.route("/")
def home():
    return render_template("slide.html", slide=SLIDES[0], slides=SLIDES)

@app.route("/slide/<int:slide_id>")
def slide(slide_id):
    if slide_id < 1 or slide_id > len(SLIDES):
        abort(404)
    return render_template("slide.html", slide=SLIDES[slide_id - 1], slides=SLIDES)

if __name__ == "__main__":
    app.run(debug=True)
