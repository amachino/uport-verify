import FrontHeader from 'views/site/header/Front'
import FrontMain from 'views/site/main/Front'
import AboutMain from 'views/site/main/About'
import BountiesMain from 'views/site/main/Bounties'

/**
 * Verify | Trust Manager
 * 
 * The following Routes correspond with the Trust Manager Prototype
 */

// Email
import VerifyEmailHeader from 'views/site/header/VerifyEmail'
import VerifyEmailMain from 'views/site/main/VerifyEmail'
// Twitter
import VerifyTwitterHeader from 'views/site/header/VerifyTwitter'
import VerifyTwitterMain from 'views/site/main/VerifyTwitter'
// Github
import VerifyGithubHeader from 'views/site/header/VerifyGithub'
import VerifyGithubMain from 'views/site/main/VerifyGithub'


export default [
  {
    path: "/",
    header: FrontHeader,
    main: FrontMain,
    meta: {
      exact: true,
    }
  },  
  {
    path: "/about",
    main: AboutMain,
    meta: {
      exact: true,
    }
  },  
  {
    path: "/bounties",
    main: BountiesMain,
    meta: {
      exact: true,
    }
  },  
  {
    path: "/verify/email",
    header: VerifyEmailHeader,
    main: VerifyEmailMain,
    meta: {
      exact: true,
    }
  },
  {
    path: "/verify/twitter",
    header: VerifyTwitterHeader,
    main: VerifyTwitterMain,
    meta: {
      exact: true,
    }
  },
  {
    path: "/verify/github",
    header: VerifyGithubHeader,
    main: VerifyGithubMain,
    meta: {
      exact: true,
    }
  }
]