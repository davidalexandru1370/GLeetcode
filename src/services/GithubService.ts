interface IGithubService {
  signup: () => void;
}

class GithubService implements IGithubService {
  signup() {

      	  console.log("Github signup");
  }
}
