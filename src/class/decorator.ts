import { Component } from "react";

  export function DispatchContextDecoratorFactory(): ClassDecorator {
      return (Component) => {
          // NOTE 1: not returnning value; modify constructor
          
          Component.contextTypes = Component.contextTypes || {};
          Component.contextTypes.dispatch = React.PropTypes.func.isRequired;
      };
  }
  

  
 // https://stackoverflow.com/a/54249355/6560291
 // I also am curious why the React community calls this Higher-Order Component (HOC) 
 // instead of Decorator pattern, which seems to be what it exactly is doing and has been described in 1994 (!) 
 // by the Gang of Four (GoF): Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides.
  
  export function HistoryListenerFactory<P>(): ClassDecorator {
      return (Component): any => {
          // NOTE2: returnning a value; this is the same as react HOC
          class HistoryListenerComponent extends React.Component<any, any> {
  
              static contextTypes = {
                  history: React.PropTypes.object.isRequired,
              };
  
              context: {
                  history: any;
              };
  
  
             render(){
                 return <Component {...this.props} />
             }
            }
            return HistoryListenerComponent
        }
    }
  
  
  
  
              
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
