/// <reference path="../../typings/tsd.d.ts" />

import * as request from "superagent";
import {
    SuperAgentStatic,
    SuperAgentRequest,
    Response
} from "superagent";

export type RequestHeaders = {
    [header: string]: string;
}
export type RequestHeadersHandler = (headers: RequestHeaders) => RequestHeaders;

export type ConfigureAgentHandler = (agent: SuperAgentStatic) => SuperAgentStatic;

export type ConfigureRequestHandler = (agent: SuperAgentRequest) => SuperAgentRequest;

export type CallbackHandler = (err: any, res ? : request.Response) => void;

export type Order = {
    'id' ? : number;
    'petId' ? : number;
    'quantity' ? : number;
    'shipDate' ? : string;
    'status' ? : "placed" | "approved" | "delivered";
    'complete' ? : boolean;
};

export type User = {
    'id' ? : number;
    'username' ? : string;
    'firstName' ? : string;
    'lastName' ? : string;
    'email' ? : string;
    'password' ? : string;
    'phone' ? : string;
    'userStatus' ? : number;
};

export type Category = {
    'id' ? : number;
    'name' ? : string;
};

export type Tag = {
    'id' ? : number;
    'name' ? : string;
};

export type Pet = {
    'id' ? : number;
    'category' ? : Category;
    'name': string;
    'photoUrls': Array < string >
    ;
    'tags' ? : Array < Tag >
    ;
    'status' ? : "available" | "pending" | "sold";
};

export type ApiResponse = {
    'code' ? : number;
    'type' ? : string;
    'message' ? : string;
};

export type Logger = {
    log: (line: string) => any
};

export interface ResponseWithBody < T > extends Response {
    body: T;
}

export interface CommonRequestOptions {
    $queryParameters ? : {
        [param: string]: any
    };
    $domain ? : string;
    $path ? : string | ((path: string) => string);
}

/**
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 * @class Test
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export class Test {

    private domain: string = "https://petstore.swagger.io/v2";
    private errorHandlers: CallbackHandler[] = [];
    private requestHeadersHandler ? : RequestHeadersHandler;
    private configureAgentHandler ? : ConfigureAgentHandler;
    private configureRequestHandler ? : ConfigureRequestHandler;

    constructor(domain ? : string, private logger ? : Logger) {
        if (domain) {
            this.domain = domain;
        }
    }

    getDomain() {
        return this.domain;
    }

    addErrorHandler(handler: CallbackHandler) {
        this.errorHandlers.push(handler);
    }

    setRequestHeadersHandler(handler: RequestHeadersHandler) {
        this.requestHeadersHandler = handler;
    }

    setConfigureAgentHandler(handler: ConfigureAgentHandler) {
        this.configureAgentHandler = handler;
    }

    setConfigureRequestHandler(handler: ConfigureRequestHandler) {
        this.configureRequestHandler = handler;
    }

    private request(method: string, url: string, body: any, headers: RequestHeaders, queryParameters: any, form: any, reject: CallbackHandler, resolve: CallbackHandler) {
        if (this.logger) {
            this.logger.log(`Call ${method} ${url}`);
        }

        const agent = this.configureAgentHandler ?
            this.configureAgentHandler(request) :
            request;

        let req = agent(method, url);
        if (this.configureRequestHandler) {
            req = this.configureRequestHandler(req);
        }

        req = req.query(queryParameters);

        if (body) {
            req.send(body);

            if (typeof(body) === 'object' && !(body.constructor.name === 'Buffer')) {
                headers['Content-Type'] = 'application/json';
            }
        }

        if (Object.keys(form).length > 0) {
            req.type('form');
            req.send(form);
        }

        if (this.requestHeadersHandler) {
            headers = this.requestHeadersHandler({
                ...headers
            });
        }

        Object.keys(headers).forEach(key => {
            req.set(key, headers[key]);
        });

        req.end((error, response) => {
            if (error || !response.ok) {
                reject(error);
                this.errorHandlers.forEach(handler => handler(error));
            } else {
                resolve(response);
            }
        });
    }

    addPetURL(parameters: {
        'body': Pet,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/pet';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Add a new pet to the store
     * @method
     * @name Test#addPet
     * @param {} body - Pet object that needs to be added to the store
     */
    addPet(parameters: {
        'body': Pet,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/pet';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updatePetURL(parameters: {
        'body': Pet,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/pet';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Update an existing pet
     * @method
     * @name Test#updatePet
     * @param {} body - Pet object that needs to be added to the store
     */
    updatePet(parameters: {
        'body': Pet,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/pet';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    findPetsByStatusURL(parameters: {
        'status': Array < "available" | "pending" | "sold" >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/pet/findByStatus';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['status'] !== undefined) {
            queryParameters['status'] = parameters['status'];
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Multiple status values can be provided with comma separated strings
     * @method
     * @name Test#findPetsByStatus
     * @param {array} status - Status values that need to be considered for filter
     */
    findPetsByStatus(parameters: {
        'status': Array < "available" | "pending" | "sold" >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Array < Pet >>> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/pet/findByStatus';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['status'] !== undefined) {
                queryParameters['status'] = parameters['status'];
            }

            if (parameters['status'] === undefined) {
                reject(new Error('Missing required  parameter: status'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getPetByIdURL(parameters: {
        'petId': number,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/pet/{petId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{petId}', `${parameters['petId']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Returns a single pet
     * @method
     * @name Test#getPetById
     * @param {integer} petId - ID of pet to return
     */
    getPetById(parameters: {
        'petId': number,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Pet >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/pet/{petId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            path = path.replace('{petId}', `${parameters['petId']}`);

            if (parameters['petId'] === undefined) {
                reject(new Error('Missing required  parameter: petId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updatePetWithFormURL(parameters: {
        'petId': number,
        'name' ? : string,
        'status' ? : string,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/pet/{petId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{petId}', `${parameters['petId']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Updates a pet in the store with form data
     * @method
     * @name Test#updatePetWithForm
     * @param {integer} petId - ID of pet that needs to be updated
     * @param {string} name - Updated name of the pet
     * @param {string} status - Updated status of the pet
     */
    updatePetWithForm(parameters: {
        'petId': number,
        'name' ? : string,
        'status' ? : string,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/pet/{petId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';
            headers['Content-Type'] = 'application/x-www-form-urlencoded';

            path = path.replace('{petId}', `${parameters['petId']}`);

            if (parameters['petId'] === undefined) {
                reject(new Error('Missing required  parameter: petId'));
                return;
            }

            if (parameters['name'] !== undefined) {
                form['name'] = parameters['name'];
            }

            if (parameters['status'] !== undefined) {
                form['status'] = parameters['status'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    deletePetURL(parameters: {
        'apiKey' ? : string,
        'petId': number,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/pet/{petId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{petId}', `${parameters['petId']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Deletes a pet
     * @method
     * @name Test#deletePet
     * @param {string} apiKey - This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
     * @param {integer} petId - Pet id to delete
     */
    deletePet(parameters: {
        'apiKey' ? : string,
        'petId': number,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/pet/{petId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['apiKey'] !== undefined) {
                headers['api_key'] = parameters['apiKey'];
            }

            path = path.replace('{petId}', `${parameters['petId']}`);

            if (parameters['petId'] === undefined) {
                reject(new Error('Missing required  parameter: petId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    uploadFileURL(parameters: {
        'petId': number,
        'additionalMetadata' ? : string,
        'file' ? : {},
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/pet/{petId}/uploadImage';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{petId}', `${parameters['petId']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * uploads an image
     * @method
     * @name Test#uploadFile
     * @param {integer} petId - ID of pet to update
     * @param {string} additionalMetadata - Additional data to pass to server
     * @param {file} file - file to upload
     */
    uploadFile(parameters: {
        'petId': number,
        'additionalMetadata' ? : string,
        'file' ? : {},
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiResponse >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/pet/{petId}/uploadImage';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'multipart/form-data';

            path = path.replace('{petId}', `${parameters['petId']}`);

            if (parameters['petId'] === undefined) {
                reject(new Error('Missing required  parameter: petId'));
                return;
            }

            if (parameters['additionalMetadata'] !== undefined) {
                form['additionalMetadata'] = parameters['additionalMetadata'];
            }

            if (parameters['file'] !== undefined) {
                form['file'] = parameters['file'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getInventoryURL(parameters: {} & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/store/inventory';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Returns a map of status codes to quantities
     * @method
     * @name Test#getInventory
     */
    getInventory(parameters: {
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < {
        [key: string]: number
    } >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/store/inventory';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    placeOrderURL(parameters: {
        'body': Order,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/store/order';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Place an order for a pet
     * @method
     * @name Test#placeOrder
     * @param {} body - order placed for purchasing the pet
     */
    placeOrder(parameters: {
        'body': Order,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Order >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/store/order';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getOrderByIdURL(parameters: {
        'orderId': number,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/store/order/{orderId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{orderId}', `${parameters['orderId']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
     * @method
     * @name Test#getOrderById
     * @param {integer} orderId - ID of pet that needs to be fetched
     */
    getOrderById(parameters: {
        'orderId': number,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Order >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/store/order/{orderId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            path = path.replace('{orderId}', `${parameters['orderId']}`);

            if (parameters['orderId'] === undefined) {
                reject(new Error('Missing required  parameter: orderId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    deleteOrderURL(parameters: {
        'orderId': number,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/store/order/{orderId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{orderId}', `${parameters['orderId']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
     * @method
     * @name Test#deleteOrder
     * @param {integer} orderId - ID of the order that needs to be deleted
     */
    deleteOrder(parameters: {
        'orderId': number,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/store/order/{orderId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            path = path.replace('{orderId}', `${parameters['orderId']}`);

            if (parameters['orderId'] === undefined) {
                reject(new Error('Missing required  parameter: orderId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    createUserURL(parameters: {
        'body': User,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * This can only be done by the logged in user.
     * @method
     * @name Test#createUser
     * @param {} body - Created user object
     */
    createUser(parameters: {
        'body': User,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    createUsersWithArrayInputURL(parameters: {
        'body': Array < User >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user/createWithArray';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Creates list of users with given input array
     * @method
     * @name Test#createUsersWithArrayInput
     * @param {} body - List of user object
     */
    createUsersWithArrayInput(parameters: {
        'body': Array < User >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user/createWithArray';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    createUsersWithListInputURL(parameters: {
        'body': Array < User >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user/createWithList';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Creates list of users with given input array
     * @method
     * @name Test#createUsersWithListInput
     * @param {} body - List of user object
     */
    createUsersWithListInput(parameters: {
        'body': Array < User >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user/createWithList';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    loginUserURL(parameters: {
        'username': string,
        'password': string,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user/login';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['username'] !== undefined) {
            queryParameters['username'] = parameters['username'];
        }

        if (parameters['password'] !== undefined) {
            queryParameters['password'] = parameters['password'];
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Logs user into the system
     * @method
     * @name Test#loginUser
     * @param {string} username - The user name for login
     * @param {string} password - The password for login in clear text
     */
    loginUser(parameters: {
        'username': string,
        'password': string,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < string >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user/login';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['username'] !== undefined) {
                queryParameters['username'] = parameters['username'];
            }

            if (parameters['username'] === undefined) {
                reject(new Error('Missing required  parameter: username'));
                return;
            }

            if (parameters['password'] !== undefined) {
                queryParameters['password'] = parameters['password'];
            }

            if (parameters['password'] === undefined) {
                reject(new Error('Missing required  parameter: password'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    logoutUserURL(parameters: {} & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user/logout';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Logs out current logged in user session
     * @method
     * @name Test#logoutUser
     */
    logoutUser(parameters: {
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user/logout';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getUserByNameURL(parameters: {
        'username': string,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user/{username}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{username}', `${parameters['username']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get user by user name
     * @method
     * @name Test#getUserByName
     * @param {string} username - The name that needs to be fetched. Use user1 for testing. 
     */
    getUserByName(parameters: {
        'username': string,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < User >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user/{username}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            path = path.replace('{username}', `${parameters['username']}`);

            if (parameters['username'] === undefined) {
                reject(new Error('Missing required  parameter: username'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateUserURL(parameters: {
        'username': string,
        'body': User,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user/{username}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{username}', `${parameters['username']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * This can only be done by the logged in user.
     * @method
     * @name Test#updateUser
     * @param {string} username - name that need to be updated
     * @param {} body - Updated user object
     */
    updateUser(parameters: {
        'username': string,
        'body': User,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user/{username}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            path = path.replace('{username}', `${parameters['username']}`);

            if (parameters['username'] === undefined) {
                reject(new Error('Missing required  parameter: username'));
                return;
            }

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    deleteUserURL(parameters: {
        'username': string,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user/{username}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{username}', `${parameters['username']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * This can only be done by the logged in user.
     * @method
     * @name Test#deleteUser
     * @param {string} username - The name that needs to be deleted
     */
    deleteUser(parameters: {
        'username': string,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/user/{username}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            path = path.replace('{username}', `${parameters['username']}`);

            if (parameters['username'] === undefined) {
                reject(new Error('Missing required  parameter: username'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

}

export default Test;
