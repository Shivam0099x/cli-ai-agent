hum kahi pe bhi apni application ki command likhe aur vo chalu hona shuru ho jaaye, like claude code, hum claude likhte hain terminal mein, doesn't matter kishi bhi folder mein hoo, claude launch ho jata hai... Ushi ke jysa kch banana hai 

Need to create tools for ai so that by using those tools ai will able to perform CRUD with files and folders...

Tools :-
upsertFiles => Create Files, Update if exist
readFiles => read the content of Files 
deleteFiles => delete the specified files 


packages we need :
npm i langchain @langchain/groq zod @langchain/langgraph dotenv

but when we create env variables in dotenv... then we cannot accees env variable in every folder from cli, and our project is cli based... 
so for this we'll follow a setting.json file: and this will be in root  
if setting.json file doesn't exist then ai will create that and ask the developer once to add their API_KEY... when user run their beta command in CLI 