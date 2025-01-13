# getting started cammonds

1) git config --global user.name "your-user-name"
2) git config --global user.email "your-user-email"
3) git config --global cort.editor "code --wait"
4) git config --global core.autocrlf


jab bhi aap ek folder banaate hai git ko kuchh nahi pata aapke folder ke baare mein, isliye aap waha pe git ko initialize karte ho, ab git ko permissions mili hai to git aapke folder ko pehchaanta hai, to ab kyuki git kaam kar sakta hai is folder per to ab ham yaha par untracked, tracjed, modified, staged and saved checkpoint create kr skte hai, git kuchh interesting cheeje kar skta hai jaise ki aap chaahe to kisi bhi moment par ye check kr sakte ho aapki kitni files kis stage par hai...

# initialize karo
-> check kr sakte ho aap konsi file kis satge mein hai-> git status -s
-> check kr sakte ho aapke kitne save checkpoints hai-> git log --oneline or --graph

# git status -s
tab hi status batata hein jub tak file commit nahi hoti jub file commit ho jaati hein tab kuch nahi bataata!

# git log --oneline and git log --graph
git log --oneline har commit history bataata hein 
 

# staging in github
jab aap kisi branch mine kaam kr rahe ho and aapne kuchh code likha hein and aapne us code ko commit nahi kiya hein, aur aap dusri beanch mein jaane ki koshish kr rahe ho to git apko bolta hein ki bhai changes save nahi hein changes delete ho jaayenge hum chahe to us changes ko delete kr sakte hein aur chahe to draft bhi kr sakte hein, jubh bhi draft karenge to wo changes naa hi delete honge aur nahi add honge but beech me hi kahi dale rahenge fir app us branch mein jub waapas aaye to wo changes aap wapas se aplya kr kr sakte ho.

# git switch branch name
ye branch me switch hone ke liye hein.

# git switch -c branch name
is command mein "-c" ye yek naya branch create krta hein aur us branch me switch ho jaata hein
