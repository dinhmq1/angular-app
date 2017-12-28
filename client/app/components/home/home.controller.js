// create our controller using the
// ES2015 classes. These classes are primiarily syntabtical
// sugar over JavaScript's exisiting prototyp-based inheritance.
import _ from 'lodash';

class HomeController {
  // bind to this and not $scope
  // because of controllerAs.
  constructor() {
    this.title = "Petrocloud's Technical Test";
  }
}
// could also just export the class up top as well
export {HomeController};
