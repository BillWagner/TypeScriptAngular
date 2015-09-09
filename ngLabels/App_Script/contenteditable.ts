/// <reference path="../scripts/typings/angularjs/angular.d.ts" />

module LabelApplication {
    class ContentEditable implements ng.IDirective {
        static factory(): ng.IDirectiveFactory {
            return () => new ContentEditable();
        }

        restrict = 'A';
        require = 'ngModel';
        link = (scope: ng.IScope, element: ng.IRootElementService, attrs: any,
            ngModel: ng.INgModelController) => {
            function read() {
                ngModel.$setViewValue(element.html());
            }
            ngModel.$render = function () {
                element.html(ngModel.$viewValue || "");
            };
            element.bind("blur keyup change", function () {
                scope.$apply(read);
            });

        };
    }
    LabelEditor.editorModule.directive('contenteditable', ContentEditable.factory());
} 
