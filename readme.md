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
 