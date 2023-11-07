export function Profile(){
    return(
        <div>
            <img 
            src="https://i.imgur.com/QIrZWGIs.jpg" 
            alt="Allan L. Hart" />
        </div>
    );  
}

export default function Photos(){
    return(
        <div>
            <h1>Amazing Scientist</h1>
            <Profile />
            <Profile />
            <Profile />
        </div>
    );
}