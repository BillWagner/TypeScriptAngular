/// <reference path="../scripts/typings/angularjs/angular.d.ts" />

module LabelApplication {
    import ngr = ng.resource;

    export class LabelCollection {
        constructor(
            private $scope: ng.IScope,
            private service: LabelDataService) {
            this.sequence = service.retrieveAllLabels();
        }

        public update(label: LabelApplication.Rest.Label) {
            this.service.updateLabel(label);
        }

        sequence: ngr.IResourceArray<LabelApplication.Rest.Label>;
    }
    LabelEditor
        .editorModule
        .controller("labelCollection", ["$scope", "labelDataService", LabelCollection]);
}
