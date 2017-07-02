const Controller = require('@conga/framework-rest').BassRestController;

/**
 * @Route("/api/posts")
 * @Rest:Controller(
 *     model="Post",
 *     isPaginationEnabled=true,
 *     defaultLimit=1000,
 *     isIncludeRelatedSupported=true
 * )
 */
module.exports = class PostController extends Controller {

}
