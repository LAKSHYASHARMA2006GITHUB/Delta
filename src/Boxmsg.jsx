function Boxmsg({userName,textColor}){
    return(
        <div className="boxmsg">
          <h1 style={{color:textColor}}>Hello {userName}</h1>
        </div>
    );
}
export default Boxmsg;