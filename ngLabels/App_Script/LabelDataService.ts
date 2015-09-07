/// <reference path="label.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

module LabelApplication {
    import Rest = LabelApplication.Rest;
    import ngr = ng.resource;

    // create an interface for the resource type because I like to use 
    // create instead of save for new objects:
    interface ILabelResourceClass extends ngr.IResourceClass<Rest.Label> {
        create(label: Rest.Label, success: Function);
    }

    LabelEditor.editorModule.factory('labelDataService', ["$resource",
        (r) => {
            return new LabelDataService(r);
        }]);

    export class LabelDataService {
        private resource: ILabelResourceClass;

        constructor($resource: ngr.IResourceService) {
            this.resource = <ILabelResourceClass><any> $resource(
                "api/Labels/:id",
                { id: "@id" },
                {
                    get: { method: "GET" },
                    save: { method: "PUT" },
                    query: { method: "GET", isArray: true },
                    create: { method: "POST" },
                    delete: { method: "DELETE" }
                });
        }

        public retrieveAllLabels() {
            return this.resource.query();
        }

        public updateLabel(label: Rest.Label) {
            this.resource.save({ id: label.Id }, label);
        }
    }
};