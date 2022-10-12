class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 

        <header>
        <nav class="navbar">
          <div class="logo-container">  
            <div><img class="DM_logo" src="C:\Users\eriqu\Pictures\Saved Pictures\DeggMan Fitness Web\website assets\DM_logo.PNG"  alt="DM_logo" title="DeggMan Logo"/></div>
            <div class="brand-title"><a href="C:\Users\eriqu\Pictures\Saved Pictures\DeggMan Fitness Web\Index.html">DEGGMAN Fitness</a></div>
          </div>  
            
            <div class="nav_links">
                <ul class="nav_links-ul">
                    <li class="coaching"><a href="C:\Users\eriqu\Pictures\Saved Pictures\DeggMan Fitness Web\Main page templates\COACHING.html">COACHING</a></li>
                    <li><a href="C:\Users\eriqu\Pictures\Saved Pictures\DeggMan Fitness Web\Main page templates\DIET_PLAN.html">DIET PLANS</a></li>
                    <li><a href="C:\Users\eriqu\Pictures\Saved Pictures\DeggMan Fitness Web\Main page templates\PROGRAMS.html">PROGRAMS</a></li>
                    <li><a href="C:\Users\eriqu\Pictures\Saved Pictures\DeggMan Fitness Web\Main page templates\Meet_the_trainers.html">MEET THE TRAINERS</a></li>
                </ul>
            </div>
            <div class="profile">Login</div>
        </nav>        
    </header>

    }
}

customElements.define('header-template', MyHeader)