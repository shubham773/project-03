import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header class="w3l-header">
                    <div class="container">
                        {/* {<!--/nav-->} */}
                        <nav class="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-sm-3 px-0">
                            <a class="navbar-brand" href="index.html">
                                <span class="fa fa-newspaper-o"></span> NewsBlog</a>
                            {/* {<!-- if logo is image enable this   
						<a class="navbar-brand" href="#index.html">
							<img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
						</a> -->} */}


                            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                {/* {<!-- <span class="navbar-toggler-icon"></span> -->} */}
                                <span class="fa icon-expand fa-bars"></span>
                                <span class="fa icon-close fa-times"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <nav class="mx-auto">
                                    <div class="search-bar">
                                        <form class="search">
                                            <input type="search" class="search__input" name="search" placeholder="Discover news, articles and more"
                                                onload="equalWidth()" required />
                                            <span class="fa fa-search search__icon"></span>
                                        </form>
                                    </div>
                                </nav>
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="index.html">Home</a>
                                    </li>
                                    <li class="nav-item dropdown @@pages__active">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            More <span class="fa fa-angle-down"></span>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item @@b__active" href="beauty.html">Beauty</a>
                                            <a class="dropdown-item @@fa__active" href="fashion.html">Fashion & Style</a>
                                        </div>
                                    </li>
                                    <li class="nav-item @@contact__active">
                                        <a class="nav-link" href="contact.html">Contact</a>
                                    </li>
                                    <li class="nav-item @@contact__active">
                                        <a href="#signup" data-toggle="modal" data-target=".log-sign" class="nav-link">Register</a>
                                    </li>
                                </ul>
                            </div>
                            {/* {<!-- toggle switch for light and dark theme -->} */}
                            <div class="mobile-position">
                                <nav class="navigation">
                                    <div class="theme-switch-wrapper">
                                        <label class="theme-switch" for="checkbox">
                                            <input type="checkbox" id="checkbox" />
                                            <div class="mode-container">
                                                <i class="gg-sun"></i>
                                                <i class="gg-moon"></i>
                                            </div>
                                        </label>
                                    </div>
                                </nav>
                            </div>
                            {/* {<!-- //toggle switch for light and dark theme -->} */}
                        </nav>
                    </div>

                    {/* {<!--//nav-->} */}
                </header>

            </div>

        );
    }
}

export default Header;