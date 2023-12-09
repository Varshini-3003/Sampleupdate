import './logst.css'
function Log(){
    return(
        <div className="form">
            <div className="formbody">
            <div className="email">
                <label className="form__label" for="email">Email </label>
                <input  type="email" id="email" className="form__input" placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" placeholder="Password"/>
                    </div>
                    <div class="footer">
                        <button type="submit" class="btn">Login</button>
                    </div>

            </div>

        </div>
        
    
    )
}
export default Log;
