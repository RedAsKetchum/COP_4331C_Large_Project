import React from 'react';
import "./PageTitle.css"

function PageTitle()
{
   return(
      <header class="header-fixed">

      <div class="header-limiter">

        <h1><a href="#">Final Fantasy <span>Cards</span></a></h1>

        <nav>
          <a href="#">Home</a>
          <a href="#" class="selected">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </nav>

      </div>

      </header>
   );
};

export default PageTitle;
