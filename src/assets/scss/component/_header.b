@use "../abstract" as *;

/*----------------------------------------*/
/*  02. HEADER CSS START
/*----------------------------------------*/

.header {
  &__padding {
    padding-left: 245px;
    padding-right: 245px;
    @media #{$xxxxl} {
      padding-left: 150px;
      padding-right: 150px;
    }
    @media #{$xxl} {
      padding-left: 70px;
      padding-right: 70px;
    }
    @media #{$xl} {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media #{$lg} {
      padding: 20px;
    }
    @media #{$md} {
      padding: 20px;
    }
    @media #{$sm} {
      padding: 20px;
    }
    @media #{$xs} {
      padding: 20px;
    }
    &-2 {
      @media #{$lg} {
        padding: 20px 0;
      }
      @media #{$md} {
        padding: 20px 0;
      }
      @media #{$sm} {
        padding: 20px 0;
      }
      @media #{$xs} {
        padding: 20px 0;
      }
    }
  }
  &__shadow {
    @include box-shadow(0px 30px 40px 0px rgba(1, 11, 60, 0.06));
  }
  &__area {
    &.sticky {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: $white;
      z-index: 99;
      animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
      -webkit-animation: 300ms ease-in-out 0s normal none 1 running fadeInDown;
      display: block;
      @include box-shadow(0px 10px 20px 0px rgba(8, 0, 42, 0.08));
      & .header__search {
        & input {
          background: $grey-2;
        }
      }
      & .logo {
        & .logo-white {
          display: none;
        }
        & .logo-black {
          display: block;
        }
      }
      & .main-menu-3 {
        & ul {
          & li {
            & a {
              color: $black;
              &::after {
                border-color: $black;
              }
              &::before {
                background: $black;
              }
            }
            & .submenu {
              & li {
                & a {
                  &::before {
                    background: $red-primary;
                  }
                }
              }
            }
          }
        }
      }
      & .header__search-2 {
        & svg {
          & .st0 {
            fill: $black;
          }
          & .st1 {
            fill: $black-2;
          }
        }
      }
      & .cat-menu {
        color: $black;
        &:hover {
          color: $red-primary;
          & svg {
            & .cat-dot {
              fill: $red-primary;
            }
          }
        }
        & svg {
          & .cat-dot {
            fill: $black;
          }
        }
      }
      & .header__category::after {
        background: rgba($color: $black, $alpha: 0.2);
      }
      & .sidebar-toggle-btn {
        & .line {
          background-color: $red-primary;
        }
      }
    }
  }
  &__transparent {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 11;
  }
  &__white {
    & .cat-menu {
      color: $white;
      & svg {
        & .cat-dot {
          fill: $white;
        }
      }
      &:hover {
        color: $white;
        & svg {
          & .cat-dot {
            fill: $white;
          }
        }
      }
    }
    & .header__category::after {
      background: rgba($color: $white, $alpha: 0.2);
    }
    & .main-menu {
      & ul {
        & li {
          & a {
            color: $white;
          }
        }
      }
    }
    & .sidebar-toggle-btn {
      & .line {
        background-color: $white;
      }
    }
  }
  &__category {
    position: relative;
    padding-left: 30px;
    margin-left: 30px;
    padding-top: 3px;
    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 60%;
      @include transform(translateY(-50%));
      width: 1px;
      height: 40px;
      background: $grey-4;
    }
    & ul {
      & li {
        position: relative;
        & .cat-submenu {
          position: absolute;
          top: calc(100% + 30px);
          left: 0;
          width: 200px;
          padding: 17px 0;
          padding-bottom: 15px;
          background: $white;
          @include box-shadow(0px 10px 20px 0px rgba(8, 0, 42, 0.08));
          @include border-radius(4px);
          z-index: 1;
          visibility: hidden;
          opacity: 0;
          @include transition(0.3s);
          & li {
            display: block;
            margin-right: 0;
            & > a {
              width: 100%;
              display: block;
              padding: 3px 30px;
              text-transform: capitalize;
              color: $body-text-color;
              font-weight: 500;
              position: relative;
              &::after {
                right: 30px;
                @include transform(translateY(-50%) rotate(-90deg));
              }
            }
            &:hover {
              & > a {
                color: $red-primary;
              }
            }
          }
        }
        &:hover {
          & .cat-submenu {
            visibility: visible;
            opacity: 1;
            top: calc(100% + 10px);
          }
        }
      }
    }
  }
  &__search {
    & input {
      width: 280px;
      height: 50px;
      line-height: 20px;
      @include border-radius(4px);
      background: $white;
      outline: none;
      border: 1px solid $white;
      font-size: 16px;
      padding: 25px 65px 20px 55px;

      &::placeholder {
        color: $e-text-1;
      }
      &:focus {
        border-color: $e-blue;
      }
    }
    & button {
      background: transparent;
      position: absolute;
      top: 15px;
      left: 24px;
      & i {
        &::after {
          color: $black;
          opacity: 1;
        }
        &::before {
          color: $e-text-1;
        }
      }
    }
    &-2 {
      & svg {
        width: 18px;
        height: 18px;
        & .st0 {
          fill: #8c8faa;
        }
        & .st1 {
          fill: #ffffff;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  &__cart {
    position: absolute;
    top: 15px;
    right: 20px;
    padding-left: 18px;
    &::after {
      position: absolute;
      content: "";
      top: -5px;
      left: 0;
      width: 2px;
      height: 30px;
      background: $grey-3;
    }
    &-icon {
      display: inline-block;
      & svg {
        width: 20px;
        height: 19px;
        & .st0 {
          fill: none;
          stroke: $black;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      }
    }
    & .cart-toggle-btn {
      position: relative;
      font-size: 17px;
      color: $black;
      cursor: pointer;
      & .cart-item {
        position: absolute;
        top: -10px;
        right: -10px;
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 22px;
        text-align: center;
        font-size: 14px;
        color: $white;
        background: $e-blue;
        @include border-radius(50%);
        font-weight: 500;
        @include box-shadow(0px 10px 20px 0px rgba(4, 23, 118, 0.3));
      }
      &:hover {
        & .cart-item {
          background: $black;
        }
      }
    }
  }
  &__btn {
    &-2 {
      & a {
        height: 44px;
        line-height: 44px;
        padding: 0 38px;
      }
    }
  }
  &__search-3 {
    position: fixed;
    top: -100px;
    left: 0;
    width: 100%;
    min-height: 330px;
    padding: 40px 0;
    visibility: hidden;
    opacity: 0;
    @include transform(scale(0.5));
    z-index: 9999;
    @include transition(0.3s);
    background: #fff;
    @media #{$sm} {
      min-height: 300px;
    }
    @media #{$xs} {
      padding-top: 30px;
      min-height: 300px;
    }
    &.search-opened {
      top: 0;
      visibility: visible;
      opacity: 1;
      @include transform(scale(1));
    }
    &-btn {
      margin-bottom: 35px;
      @media #{$sm} {
        margin-bottom: 20px;
      }
      @media #{$xs} {
        margin-bottom: 20px;
      }
      &-close {
        font-size: 18px;
        color: $e-blue;
        @include transition(0.3s);
        @include transform(rotate(0deg));
      }
    }
    &-header {
      margin-bottom: 35px;
      @media #{$sm} {
        margin-bottom: 20px;
      }
      @media #{$xs} {
        margin-bottom: 20px;
      }
      & h3 {
        color: $black;
        font-size: 30px;
      }
    }
    &-categories {
      margin-bottom: 35px;
      & ul {
        & li {
          display: inline-block;
          & a {
            font-size: 18px;
            color: $black-2;
            margin: 0 30px;
            &:hover {
              color: $e-blue;
            }
            @media #{$md} {
              margin: 0 15px;
            }
            @media #{$sm} {
              font-size: 16px;
              margin: 0 5px;
            }
            @media #{$xs} {
              margin: 0 5px;
              font-size: 14px;
            }
          }
        }
      }
    }
    &-input {
      & input {
        height: 50px;
        width: 100%;
        border: none;
        padding: 0 15px;
        padding-right: 30px;
        border-bottom: 1px solid $border;
        @include border-radius(0);
        outline: none;
        &::placeholder {
          color: $e-text-4;
        }
        &:focus {
          border-color: $e-blue;
        }
      }
      & button {
        position: absolute;
        top: 0;
        right: 0;
        height: 50px;
        width: 50px;
        text-align: center;
        font-size: 14px;
        background: transparent;
        color: $black;
      }
    }
  }
  &__profile {
    height: 2rem;
  }
}

.logo-black {
  display: none;
}

// category menu area start
.cat-menu {
  font-size: 16px;
  font-weight: 500;
  color: $black;
  position: relative;
  &:hover {
    color: $e-blue;
    & svg {
      & .cat-dot {
        fill: $e-blue;
      }
    }
  }
  & svg {
    width: 16px;
    height: 16px;
    & .cat-dot {
      fill: $black;
    }
  }
  & span {
    padding-left: 14px;
    line-height: 1;
    display: inline-block;
    padding-top: 3px;
  }
}

// main menu css
.main-menu {
  & ul {
    & li {
      display: inline-block;
      position: relative;
      &:not(:first-child) {
        margin-left: 40px;
        @media #{$xxl} {
          margin-left: 30px;
        }
        @media #{$xl} {
          margin-left: 14px;
        }
      }
      & a {
        display: inline-block;
        font-size: 1rem;
        font-weight: 500;
        color: $black;
        padding: 1.5rem 0;
        text-transform: capitalize;
      }
      &.has-dropdown {
        & > a {
          position: relative;
          &::after {
            content: " ";
            display: inline-block;
            border-bottom: 1px solid $black;
            border-right: 1px solid $black;
            height: 7px;
            width: 7px;
            transform: rotate(45deg);
            margin-left: 5px;
            margin-bottom: 4px;
          }
        }
      }
      &:hover {
        & > a {
          color: $red-primary;
          &::after {
            color: $red-primary;
          }
        }
        & .submenu {
          top: 100%;
          visibility: visible;
          opacity: 1;
        }
      }
      & .submenu {
        position: absolute;
        top: 120%;
        left: 0;
        width: 200px;
        background: $white;
        z-index: 99;
        @include transition(0.3s);
        visibility: hidden;
        opacity: 0;
        @include box-shadow(0px 30px 70px 0px rgba(11, 6, 70, 0.08));
        & li {
          display: block;
          width: 100%;
          margin: 0;
          &:not(:last-child) {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }
          &.has-dropdown {
            & > a {
              &::after {
                position: absolute;
                top: 50%;
                right: 25px;
                @include transform(translateY(-50%) rotate(-90deg));
              }
            }
          }
          & a {
            padding: 10px 25px;
            font-size: 13px;
            position: relative;
            z-index: 1;
            color: $black;
            width: 100%;
            &::before {
              position: absolute;
              content: "";
              top: 0;
              left: auto;
              right: 0;
              width: 0;
              height: 100%;
              background: $red-primary;
              z-index: -1;
            }
          }
          & .submenu {
            left: 120%;
            top: 0;
            visibility: hidden;
            opacity: 0;
          }
          &:hover {
            & > a {
              color: $white;
              &::after {
                color: $white;
              }
              &::before {
                left: 0;
                right: auto;
                width: 100%;
              }
            }
            & .submenu {
              left: 100%;
              visibility: visible;
              opacity: 1;
            }
          }
        }
      }
    }
  }
}

.main-menu-2 {
  & ul {
    & li {
      &:not(:first-child) {
        margin-left: 35px;
        @media #{$xl} {
          margin-left: 20px;
        }
      }
      & .menu-tag {
        position: absolute;
        top: 13px;
        right: -4px;
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 7px;
        background: $red-primary;
        color: $white;
        @include border-radius(4px);
        font-size: 12px;
        text-transform: capitalize;
        @include box-shadow(0px 8px 20px 0px rgba(1, 23, 133, 0.3));

        @media #{$lg} {
          display: none;
        }
        &::after {
          position: absolute;
          content: "";
          bottom: -5px;
          left: 10px;
          width: 0;
          height: 0;
          border-left: 5px solid $red-primary;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
        }
      }
    }
  }
}

.main-menu-3 {
  & ul {
    & li {
      & a {
        color: $white;
        position: relative;
        &::before {
          position: absolute;
          content: "";
          left: auto;
          right: 0;
          bottom: 38px;
          width: 0%;
          height: 1px;
          background: $white;
        }
      }
      &.has-dropdown {
        & a {
          &::after {
            color: $white;
            border-color: $white;
          }
        }
      }
      & .submenu {
        & li {
          & a {
            &::after {
              color: $black;
            }
          }
        }
      }
      &:hover {
        & a {
          color: $white;
          &::before {
            width: 100%;
            left: 0;
            right: auto;
          }
        }
      }
    }
  }
}

/* sidebar css start */

.sidebar-toggle-btn {
  & .line {
    width: 30px;
    height: 3px;
    background-color: $red-primary;
    display: block;
    margin: 6px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  &-white {
    & .line {
      background: $white;
    }
  }
  &:hover {
    cursor: pointer;
    & .line {
      -webkit-transform: rotate(-30deg);
      -ms-transform: rotate(-30deg);
      -o-transform: rotate(-30deg);
      -moz-transform: rotate(-30deg);
      transform: rotate(-30deg);

      &:nth-child(1) {
        width: 10px;
      }
      &:nth-child(2) {
        width: 20px;
      }
    }
  }
}

.sidebar {
  &__area {
    position: fixed;
    right: -340px;
    top: 0;
    width: 320px;
    height: 100%;
    background: $white none repeat scroll 0 0;
    overflow-y: scroll;
    @include box-shadow(-5px 0 20px -5px rgba(0, 0, 0, 0.5));
    -webkit-transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    -moz-transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    z-index: 9999;
    &.sidebar-opened {
      right: 0px;
    }
  }
  &__wrapper {
    position: relative;
    padding: 30px;
  }
  &__close {
    position: absolute;
    top: 25px;
    right: 80px;
    &-btn {
      transition: all 450ms cubic-bezier(0.4, 0.25, 0.3, 1.3);
      width: 40px;
      height: 40px;
      position: absolute;
      text-align: center;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      color: $black;
      border: 1px solid #2a3a57;
      border-radius: 50%;
      cursor: pointer;
      overflow: hidden;
      background: transparent;
      z-index: 99;
      &:focus {
        border: 1px solid $black;
      }
      & span {
        transition: all 400ms cubic-bezier(0.4, 0.25, 0.3, 1.3) 100ms;
        position: absolute;
        top: 54%;
        left: 50%;
        font-size: 14px;
        font-weight: 500;
        line-height: 40px;
        vertical-align: middle;
        &:first-of-type {
          transform: translate(-50%, -50%);
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          -o-transform: translate(-50%, -50%);
        }
        &:last-of-type {
          text-transform: uppercase;
          transform: translate(-50%, 50%);
          -webkit-transform: translate(-50%, 50%);
          -moz-transform: translate(-50%, 50%);
          -ms-transform: translate(-50%, 50%);
          -o-transform: translate(-50%, 50%);
        }
      }
      &:hover {
        width: 100px;
        border-radius: 0;
        & span:first-of-type {
          transform: translate(-50%, -150%);
          -webkit-transform: translate(-50%, -150%);
          -moz-transform: translate(-50%, -150%);
          -ms-transform: translate(-50%, -150%);
          -o-transform: translate(-50%, -150%);
        }
        & span:last-of-type {
          transform: translate(-50%, -50%);
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          -o-transform: translate(-50%, -50%);
        }
      }
    }
  }
  &__search {
    & input {
      width: 100%;
      height: 50px;
      line-height: 20px;
      @include border-radius(4px);
      background: $grey-2;
      outline: none;
      border: 1px solid $white;
      font-size: 16px;
      padding: 25px 65px 20px 55px;

      &::placeholder {
        color: $e-text-1;
      }
      &:focus {
        border-color: $red-primary;
      }
    }
    & button {
      background: transparent;
      position: absolute;
      top: 15px;
      left: 24px;
      & i {
        &::after {
          color: $black;
          opacity: 1;
        }
        &::before {
          color: $e-text-1;
        }
      }
    }
  }
  &__cart {
    &-icon {
      display: inline-block;
      & svg {
        width: 20px;
        height: 19px;
        & .st0 {
          fill: none;
          stroke: $black;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      }
    }
    & a {
      position: relative;
      font-size: 17px;
      color: $black;
      & .cart-item {
        position: absolute;
        top: -10px;
        right: -10px;
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 22px;
        text-align: center;
        font-size: 14px;
        color: $white;
        background: $red-primary;
        @include border-radius(50%);
        font-weight: 500;
        @include box-shadow(0px 10px 20px 0px rgba(4, 23, 118, 0.3));
      }
      &:hover {
        & .cart-item {
          background: $black;
        }
      }
    }
  }
}

//sidebar css
.sidebar__area {
  position: fixed;
  overflow-y: auto;
  top: 0;
  right: -350px;
  width: 300px;
  padding: 25px 0px;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  background-color: #ffffff;
  z-index: 1020;
  -webkit-transition: all 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  -moz-transition: all 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: all 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  box-shadow: -5px 0 20px -5px rgba(0, 0, 0, 0.5);
  &.open {
    right: 0;
    visibility: visible;
    opacity: 1;
  }
}

.body-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -1;
  left: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -ms-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;

  &.show {
    z-index: 999;
    opacity: 1;
    visibility: visible;
  }
}

/* mobile menu */

.menu-bar .bars {
  display: inline-block;
  width: 50px;
  background: #212121;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 0;
  font-size: 20px;
  color: #fff;
}

.close-mobile-menu {
  color: #212121;
  position: relative;
  z-index: 2;
  font-size: 16px;
  top: -10px;
  left: 0;
  &:hover {
    color: #2b4eff;
  }
}

.mm-menu {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: block;
      &:hover {
        > a {
          padding-left: 3px;
          color: #2b4eff;
        }
      }
      a {
        padding: 12px 0;
        display: block;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        font-size: 14px;
        color: #101a23;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
      }

      a.active {
        padding-left: 3px;
        color: #2b4eff;
      }
    }

    li.has-droupdown {
      > a {
        &:after {
          position: absolute;
          content: "";
          width: 8px;
          height: 8px;
          border-width: 2px 0 0 2px;
          border-style: solid;
          border-color: initial;
          right: 16px;
          top: 50%;
          -webkit-transform: rotate(-45deg) translateY(-50%);
          transform: rotate(-45deg) translateY(-50%);
          -webkit-transform-origin: top;
          transform-origin: top;
          transition: all 0.3s ease-out;
        }
      }
      ul.sub-menu {
        padding-left: 0;
        list-style: none;
        li {
          padding-left: 15px;
          &:hover {
            > a {
              padding: 0 0 0 18px;
              color: #2b4eff;
              &:before {
                background: #2b4eff;
                border-color: #2b4eff;
              }
            }
          }
          a {
            position: relative;
            padding: 0 0 0 15px;
            text-transform: capitalize;
            font-size: 13px;
            height: 0;
            line-height: 46px;
            visibility: hidden;
            opacity: 0;
            transition: all 0.3s;

            &:before {
              content: "";
              width: 8px;
              height: 8px;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              border: 2px solid #6d8397;
              border-radius: 50%;
              visibility: hidden;
              opacity: 0;
              transition: all 0.3s;
            }
          }
        }
      }
    }

    li.has-droupdown.active {
      > a {
        color: #2b4eff;
        &:after {
          -webkit-transform: rotate(-135deg) translateY(-50%);
          transform: rotate(-135deg) translateY(-50%);
        }
      }
      ul.sub-menu.active {
        li {
          a {
            height: 46px;
            visibility: visible;
            opacity: 1;
            &:before {
              visibility: visible;
              opacity: 1;
            }
          }
        }
      }
    }
  }
}

.sidebar__areas.open .cartmini__wrapper {
  right: 0px;
}
.header__cart--responsive {
  display: none;
  @media #{$xs,$sm} {
    display: inline-block;
    position: inherit;
    padding: 0;
    margin-right: 8px;
    margin-top: 5px;
  }
}
.header__cart--responsive__white {
  .header__cart-icon svg .st0 {
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
}
.sticky {
  .header__cart--responsive__white {
    .header__cart-icon svg .st0 {
      fill: none;
      stroke: $black;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }
}