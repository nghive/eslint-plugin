import * as util from '../utils';

const requiredLifecycleEventsOrder = [
  'ngOnChanges',
  'ngOnInit',
  'ngDoCheck',
  'ngAfterContentInit',
  'ngAfterContentChecked',
  'ngAfterViewInit',
  'ngAfterViewChecked',
  'ngOnDestroy',
];

export default util.createRule({
  name: 'ng-lifecycle-events-order',
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Requires Angular lifecycle hooks to be ordered in their execution order as described by the Angular documentation (https://angular.io/guide/lifecycle-hooks#lifecycle-event-sequence).',
      recommended: false,
    },
    messages: {
      TODO: 'TODO',
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      ClassDeclaration(node): void {},
      ClassExpression(node): void {},
    };
  },
});
