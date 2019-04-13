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

export type ActivityListModel = {
    'activities' ? : Array < ActivityListItemModel >
    ;
    'operatorId' ? : number;
    'reasonId' ? : number;
    'clientTypeId' ? : number;
    'articleTypeId' ? : number;
    'filterDate' ? : string;
    'onlyActive' ? : boolean;
    'filter' ? : string;
    'formAction' ? : string;
    'itemsPerPage' ? : number;
    'itemsCount' ? : number;
    'pageIndex' ? : number;
    'pageCount' ? : number;
    'newSort' ? : string;
};

export type ActivityListItemModel = {
    'id' ? : number;
    'code' ? : string;
    'name' ? : string;
    'reasonId' ? : number;
    'reasonName' ? : string;
    'customerTypeId' ? : number;
    'customerTypeName' ? : string;
    'articleTypeId' ? : number;
    'articleTypeName' ? : string;
    'start' ? : string;
    'end' ? : string;
};

export type ActivityItemModel = {
    'id' ? : number;
    'code' ? : string;
    'name' ? : string;
    'reasonId' ? : number;
    'reasonName' ? : string;
    'customerTypeId' ? : number;
    'customerTypeName' ? : string;
    'articleTypeId' ? : number;
    'articleTypeName' ? : string;
    'users' ? : Array < UserAsignationModel >
    ;
    'customFields' ? : Array < CustomFieldItemModel >
    ;
    'startDate' ? : string;
    'endDate' ? : string;
};

export type UserAsignationModel = {
    'asignationId' ? : number;
    'firstName' ? : string;
    'lastName' ? : string;
    'fullName' ? : string;
    'userId' ? : number;
    'userName' ? : string;
};

export type CustomFieldItemModel = {
    'id' ? : number;
    'name' ? : string;
    'dataType' ? : string;
    'mandatory' ? : boolean;
    'help' ? : string;
    'code' ? : string;
    'order' ? : number;
};

export type ApiSuccessResponseOfActivityItemModel = {
    'modelErrors' ? : {
        [key: string]: Array < string >
    };
    'message' ? : string;
    'isValid' ? : boolean;
    'errorCode' ? : string;
    'notifications' ? : Array < string >
    ;
    'errors' ? : Array < string >
    ;
    'warnings' ? : Array < string >
    ;
    'data' ? : ActivityItemModel;
};

export type ActivityDataCloseModel = {
    'userId' ? : number;
    'userName' ? : string;
    'activityDataId' ? : number;
    'controlResponses' ? : Array < ControlResponse >
    ;
    'projectId' ? : number;
    'activityName' ? : string;
    'start' ? : string;
    'comments' ? : string;
    'reasonId' ? : number;
    'reasonName' ? : string;
    'clientTypeId' ? : number;
    'clientTypeName' ? : string;
    'articleTypeId' ? : number;
    'articleTypeName' ? : string;
    'controlInfo' ? : ControlInfoData;
};

export type ControlResponse = {
    'controlId' ? : number;
    'dataType' ? : string;
    'integerValue' ? : number;
    'stringValue' ? : string;
    'dateValue' ? : string;
    'boolValue' ? : boolean;
    'decimalValue' ? : number;
    'name' ? : string;
    'mandatory' ? : boolean;
    'code' ? : string;
    'help' ? : string;
    'order' ? : number;
};

export type ControlInfoData = {
    'requestClosingDateTime' ? : boolean;
    'suggestedClosingDateTime' ? : string;
    'completed' ? : boolean;
};

export type ApiSuccessResponseOfActivityDataCloseModel = {
    'modelErrors' ? : {
        [key: string]: Array < string >
    };
    'message' ? : string;
    'isValid' ? : boolean;
    'errorCode' ? : string;
    'notifications' ? : Array < string >
    ;
    'errors' ? : Array < string >
    ;
    'warnings' ? : Array < string >
    ;
    'data' ? : ActivityDataCloseModel;
};

export type ActivitiyControlsRequest = {
    'activityTypeId' ? : number;
    'activityDataId' ? : number;
};

export type ApiSuccessResponseOfEmpty = {
    'modelErrors' ? : {
        [key: string]: Array < string >
    };
    'message' ? : string;
    'isValid' ? : boolean;
    'errorCode' ? : string;
    'notifications' ? : Array < string >
    ;
    'errors' ? : Array < string >
    ;
    'warnings' ? : Array < string >
    ;
    'data' ? : Empty;
};

export type Empty = {};

export type ApiSuccessResponseOfString = {
    'modelErrors' ? : {
        [key: string]: Array < string >
    };
    'message' ? : string;
    'isValid' ? : boolean;
    'errorCode' ? : string;
    'notifications' ? : Array < string >
    ;
    'errors' ? : Array < string >
    ;
    'warnings' ? : Array < string >
    ;
    'data' ? : string;
};

export type ApiSuccessResponseOfProductTypeItemModel = {
    'modelErrors' ? : {
        [key: string]: Array < string >
    };
    'message' ? : string;
    'isValid' ? : boolean;
    'errorCode' ? : string;
    'notifications' ? : Array < string >
    ;
    'errors' ? : Array < string >
    ;
    'warnings' ? : Array < string >
    ;
    'data' ? : ProductTypeItemModel;
};

export type ProductTypeItemModel = {
    'id' ? : number;
    'name' ? : string;
};

export type ArticleTypeItemModel = {
    'id' ? : number;
    'code' ? : string;
    'name' ? : string;
    'active' ? : boolean;
};

export type ApiSuccessResponseOfArticleTypeItemModel = {
    'modelErrors' ? : {
        [key: string]: Array < string >
    };
    'message' ? : string;
    'isValid' ? : boolean;
    'errorCode' ? : string;
    'notifications' ? : Array < string >
    ;
    'errors' ? : Array < string >
    ;
    'warnings' ? : Array < string >
    ;
    'data' ? : ArticleTypeItemModel;
};

export type ArticleTypeModelList = {
    'articleTypes' ? : Array < ArticleTypeItemModel >
    ;
    'showDeleted' ? : boolean;
    'filter' ? : string;
    'formAction' ? : string;
    'itemsPerPage' ? : number;
    'itemsCount' ? : number;
    'pageIndex' ? : number;
    'pageCount' ? : number;
    'newSort' ? : string;
};

export type CustomerTypeModelList = {
    'showDeleted' ? : boolean;
    'commercialEntityTypes' ? : Array < CustomerTypeItemModel >
    ;
    'filter' ? : string;
    'formAction' ? : string;
    'itemsPerPage' ? : number;
    'itemsCount' ? : number;
    'pageIndex' ? : number;
    'pageCount' ? : number;
    'newSort' ? : string;
};

export type CustomerTypeItemModel = {
    'id' ? : number;
    'name' ? : string;
    'code' ? : string;
    'active' ? : boolean;
};

export type ApiSuccessResponseOfCustomerTypeItemModel = {
    'modelErrors' ? : {
        [key: string]: Array < string >
    };
    'message' ? : string;
    'isValid' ? : boolean;
    'errorCode' ? : string;
    'notifications' ? : Array < string >
    ;
    'errors' ? : Array < string >
    ;
    'warnings' ? : Array < string >
    ;
    'data' ? : CustomerTypeItemModel;
};

export type ReasonModelList = {
    'reasons' ? : Array < ReasonItemModel >
    ;
    'showDeleted' ? : boolean;
    'filter' ? : string;
    'formAction' ? : string;
    'itemsPerPage' ? : number;
    'itemsCount' ? : number;
    'pageIndex' ? : number;
    'pageCount' ? : number;
    'newSort' ? : string;
};

export type ReasonItemModel = {
    'id' ? : number;
    'code' ? : string;
    'name' ? : string;
    'active' ? : boolean;
};

export type ApiSuccessResponseOfReasonItemModel = {
    'modelErrors' ? : {
        [key: string]: Array < string >
    };
    'message' ? : string;
    'isValid' ? : boolean;
    'errorCode' ? : string;
    'notifications' ? : Array < string >
    ;
    'errors' ? : Array < string >
    ;
    'warnings' ? : Array < string >
    ;
    'data' ? : ReasonItemModel;
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
 * Api de gestión de proyectos
 * @class Test
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export class Test {

    private domain: string = "";
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

    GetActivityListURL(parameters: {
        'listModel' ? : ActivityListModel,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/activities';
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
     * 
     * @method
     * @name Test#GetActivityList
     * @param {} listModel - Api de gestión de proyectos
     */
    GetActivityList(parameters: {
        'listModel' ? : ActivityListModel,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ActivityListModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/activities';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['listModel'] !== undefined) {
                body = parameters['listModel'];
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

    UpdateActivityURL(parameters: {
        'model' ? : ActivityItemModel,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/activity';
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
     * 
     * @method
     * @name Test#UpdateActivity
     * @param {} model - Api de gestión de proyectos
     */
    UpdateActivity(parameters: {
        'model' ? : ActivityItemModel,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfActivityItemModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/activity';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
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

    UpdateActivityDataURL(parameters: {
        'model' ? : ActivityDataCloseModel,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/activitydata';
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
     * 
     * @method
     * @name Test#UpdateActivityData
     * @param {} model - Api de gestión de proyectos
     */
    UpdateActivityData(parameters: {
        'model' ? : ActivityDataCloseModel,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfActivityDataCloseModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/activitydata';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
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

    DeleteActivityURL(parameters: {
        'model' ? : ActivitiyControlsRequest,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/activity/delete';
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
     * 
     * @method
     * @name Test#DeleteActivity
     * @param {} model - Api de gestión de proyectos
     */
    DeleteActivity(parameters: {
        'model' ? : ActivitiyControlsRequest,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfEmpty >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/activity/delete';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
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

    DeleteActivityDataURL(parameters: {
        'model' ? : ActivitiyControlsRequest,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/activitydata/delete';
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
     * 
     * @method
     * @name Test#DeleteActivityData
     * @param {} model - Api de gestión de proyectos
     */
    DeleteActivityData(parameters: {
        'model' ? : ActivitiyControlsRequest,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfString >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/activitydata/delete';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
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

    GetActivityURL(parameters: {
        'entityId': number,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/activity/{entityId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{entityId}', `${parameters['entityId']}`);

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
     * 
     * @method
     * @name Test#GetActivity
     * @param {integer} entityId - Api de gestión de proyectos
     */
    GetActivity(parameters: {
        'entityId': number,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfActivityItemModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/activity/{entityId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            path = path.replace('{entityId}', `${parameters['entityId']}`);

            if (parameters['entityId'] === undefined) {
                reject(new Error('Missing required  parameter: entityId'));
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

    GetActivityWithUsersURL(parameters: {
        'entityId': number,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/activity/withusers/{entityId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{entityId}', `${parameters['entityId']}`);

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
     * 
     * @method
     * @name Test#GetActivityWithUsers
     * @param {integer} entityId - Api de gestión de proyectos
     */
    GetActivityWithUsers(parameters: {
        'entityId': number,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfActivityItemModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/activity/withusers/{entityId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            path = path.replace('{entityId}', `${parameters['entityId']}`);

            if (parameters['entityId'] === undefined) {
                reject(new Error('Missing required  parameter: entityId'));
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

    GetArticleTypeURL(parameters: {
        'entityId': number,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/articletype/{entityId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{entityId}', `${parameters['entityId']}`);

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
     * 
     * @method
     * @name Test#GetArticleType
     * @param {integer} entityId - Api de gestión de proyectos
     */
    GetArticleType(parameters: {
        'entityId': number,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfProductTypeItemModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/articletype/{entityId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            path = path.replace('{entityId}', `${parameters['entityId']}`);

            if (parameters['entityId'] === undefined) {
                reject(new Error('Missing required  parameter: entityId'));
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

    DeleteArticleTypeURL(parameters: {
        'articleTypeId': number,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/articleType/{articleTypeId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{articleTypeId}', `${parameters['articleTypeId']}`);

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
     * 
     * @method
     * @name Test#DeleteArticleType
     * @param {integer} articleTypeId - Api de gestión de proyectos
     */
    DeleteArticleType(parameters: {
        'articleTypeId': number,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfEmpty >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/articleType/{articleTypeId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            path = path.replace('{articleTypeId}', `${parameters['articleTypeId']}`);

            if (parameters['articleTypeId'] === undefined) {
                reject(new Error('Missing required  parameter: articleTypeId'));
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

    UpdateArticleTypeURL(parameters: {
        'model' ? : ArticleTypeItemModel,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/articleType';
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
     * 
     * @method
     * @name Test#UpdateArticleType
     * @param {} model - Api de gestión de proyectos
     */
    UpdateArticleType(parameters: {
        'model' ? : ArticleTypeItemModel,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfArticleTypeItemModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/articleType';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
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

    GetProductTypesURL(parameters: {
        'model' ? : ArticleTypeModelList,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/producttypes';
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
     * 
     * @method
     * @name Test#GetProductTypes
     * @param {} model - Api de gestión de proyectos
     */
    GetProductTypes(parameters: {
        'model' ? : ArticleTypeModelList,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ArticleTypeModelList >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/producttypes';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
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

    GetEntityTypeListURL(parameters: {
        'model' ? : CustomerTypeModelList,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/entitytypes';
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
     * 
     * @method
     * @name Test#GetEntityTypeList
     * @param {} model - Api de gestión de proyectos
     */
    GetEntityTypeList(parameters: {
        'model' ? : CustomerTypeModelList,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < CustomerTypeModelList >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/entitytypes';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
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

    UpdateEntityTypeURL(parameters: {
        'model' ? : CustomerTypeItemModel,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/entitytype';
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
     * 
     * @method
     * @name Test#UpdateEntityType
     * @param {} model - Api de gestión de proyectos
     */
    UpdateEntityType(parameters: {
        'model' ? : CustomerTypeItemModel,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfCustomerTypeItemModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/entitytype';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
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

    GetEntityTypeURL(parameters: {
        'entityId': number,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/entitytype/{entityId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{entityId}', `${parameters['entityId']}`);

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
     * 
     * @method
     * @name Test#GetEntityType
     * @param {integer} entityId - Api de gestión de proyectos
     */
    GetEntityType(parameters: {
        'entityId': number,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfCustomerTypeItemModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/entitytype/{entityId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            path = path.replace('{entityId}', `${parameters['entityId']}`);

            if (parameters['entityId'] === undefined) {
                reject(new Error('Missing required  parameter: entityId'));
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

    DeleteCustomerTypeURL(parameters: {
        'entityId': number,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/clienttype/{entityId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{entityId}', `${parameters['entityId']}`);

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
     * 
     * @method
     * @name Test#DeleteCustomerType
     * @param {integer} entityId - Api de gestión de proyectos
     */
    DeleteCustomerType(parameters: {
        'entityId': number,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfEmpty >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/clienttype/{entityId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            path = path.replace('{entityId}', `${parameters['entityId']}`);

            if (parameters['entityId'] === undefined) {
                reject(new Error('Missing required  parameter: entityId'));
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

    GetReasonsURL(parameters: {
        'model' ? : ReasonModelList,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/reasons';
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
     * 
     * @method
     * @name Test#GetReasons
     * @param {} model - Api de gestión de proyectos
     */
    GetReasons(parameters: {
        'model' ? : ReasonModelList,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ReasonModelList >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/reasons';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
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

    GetReasonURL(parameters: {
        'entityId': number,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/reason/{entityId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{entityId}', `${parameters['entityId']}`);

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
     * 
     * @method
     * @name Test#GetReason
     * @param {integer} entityId - Api de gestión de proyectos
     */
    GetReason(parameters: {
        'entityId': number,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfReasonItemModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/reason/{entityId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            path = path.replace('{entityId}', `${parameters['entityId']}`);

            if (parameters['entityId'] === undefined) {
                reject(new Error('Missing required  parameter: entityId'));
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

    DeleteReasonURL(parameters: {
        'reasonId': number,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/reason/{reasonId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{reasonId}', `${parameters['reasonId']}`);

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
     * 
     * @method
     * @name Test#DeleteReason
     * @param {integer} reasonId - Api de gestión de proyectos
     */
    DeleteReason(parameters: {
        'reasonId': number,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfEmpty >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/reason/{reasonId}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = '';

            path = path.replace('{reasonId}', `${parameters['reasonId']}`);

            if (parameters['reasonId'] === undefined) {
                reject(new Error('Missing required  parameter: reasonId'));
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

    UpdateReasonURL(parameters: {
        'model' ? : ReasonItemModel,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/reason';
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
     * 
     * @method
     * @name Test#UpdateReason
     * @param {} model - Api de gestión de proyectos
     */
    UpdateReason(parameters: {
        'model' ? : ReasonItemModel,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ApiSuccessResponseOfReasonItemModel >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/commercial_entities/reason';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'text/plain, application/json, text/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
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

}

export default Test;
