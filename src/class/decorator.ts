  export function DispatchContextDecoratorFactory(): ClassDecorator {
      return (Component) => {
          Component.contextTypes = Component.contextTypes || {};
          Component.contextTypes.dispatch = React.PropTypes.func.isRequired;
      };
  }
  
  // TODO async dispatch returns Promise
  // Fix to include promise in signature
  export interface IDispatchContext {
      dispatch: ICommon.IReduxStoreDispatch;
  }
  
  
  //********************************************* */
  
  export function HistoryListenerFactory<P>(): ClassDecorator {
      return (Component): any => {
          class HistoryListenerComponent extends React.Component<any, any> {
  
              static contextTypes = {
                  history: React.PropTypes.object.isRequired,
              };
  
              context: {
                  history: any;
              };
  
  
  
  
  
  
  
              
  @FilterWeb()
  @HistoryListener()
  export default class Filter extends React.Component<IProps, any> {
  
      static displayName = 'Filter';
  
      static contextTypes = {
          router: React.PropTypes.object.isRequired,
      };
  
      constructor(props, context) {
          super(props, context);
          this.state = Object.assign({}, super.state, {
              urlBeforeNavigatingToMostPopular: null,
          });
      }
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter("world"));
