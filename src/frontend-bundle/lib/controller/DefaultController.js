const Controller = require('@conga/framework').Controller;

/**
 * This is the default controller which defines the action
 * to render the main index page
 * 
 * @Route("/")
 */
module.exports = class DefaultController extends Controller {

    /**
     * This is the default index action
     *
     * @Route("/", name="default.index", methods=["GET"])
     * @Template
     */
    index(req, res) {
        res.return();
    }

}
