/*
 * This file is part of the conga-full-demo project
 *
 * (c) Marc Roulias <marc@lampjunkie.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const Controller = require('@conga/framework').Controller;

/**
 * The DefaultController defines the default actions and routes
 * 🔐
 *
 * @Route("/") ◀︎ this prefixes all routes in this controller with "/"
 */
module.exports = class DefaultController extends Controller {

    /**
     * @Route("/",              ◀︎ the route path
     *    name="default.index", ◀︎ unique name to reference route in templates
     *    methods=["GET"]       ◀︎ the allowed HTTP method(s)
     * )
     *
     * @Template                ◀︎ this tells conga to render the corresponding template
     *                            from lib/resources/views/default/index.html.twig
     */
    index(req, res) {
        res.return();
    }

}
