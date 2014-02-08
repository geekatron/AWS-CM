/**
 * Created with WebStorm.
 * Date: 2/8/2014
 * Time: 2:32 AM
 * @author Adam C. Nowak
 * @description
 */

/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
    /**
     * Array of application names.
     */
    app_name : ['AWS CMS'],
    /**
     * Your New Relic license key.
     */
    license_key : 'af932ef6b0b2d9e6cf71272da593e81c86db8c7b',
    logging : {
        /**
         * Level at which to log. 'trace' is most useful to New Relic when diagnosing
         * issues with the agent, 'info' and higher will impose the least overhead on
         * production applications.
         */
        level : 'trace'
    }
};

