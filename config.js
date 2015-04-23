// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://www.thomasgreco.me/blog',
        mail: {},
        database: {
            client: 'postgres',
            connection: {
                host: 'ec2-54-243-187-196.compute-1.amazonaws.com',
                user: 'vuaptpbvyeugfs',
                password: 'rtD4Sjnrp1BsRxzC-F46Lbwq6G',
                database: 'd9n460s8o1p35k',
                charset: 'utf8'
            },
            connection: {
                filename: path.join(__dirname, 'node_modules/ghost/content/data/ghost.db')
            },
            debug: false
        },

        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        }
    },

    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blogs published URL.
        url: 'http://localhost:2368',

        mail: {
            transport: 'SMTP',
            options: {
                service: 'Mailgun',
                auth: {
                    user: 'postmaster@sandbox8c40ada7c2e0439d9a5089803ecf3a02.mailgun.org',
                    pass: '5rrzqq60zua5'
                }
            }
        },

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, 'node_modules/ghost/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        paths: {
            contentPath: path.join(__dirname, 'node_modules/ghost/content/')
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, 'node_modules/ghost/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host: '127.0.0.1',
                user: 'root',
                password: '',
                database: 'ghost_testing',
                charset: 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host: '127.0.0.1',
                user: 'postgres',
                password: '',
                database: 'ghost_testing',
                charset: 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

// Export config
module.exports = config;