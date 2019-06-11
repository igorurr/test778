import * as React from "react";
import { connect } from "react-redux";

interface IProps {
    
}

interface IState {
    
}

class LeftBar extends React.Component<IProps, IState> {

    public render() {

        // импортим страницы: главная, юзер, блог главная, блог страница
        return (
            <>
                
            </>
        );
    }

    public componentDidMount() {
        
    }
    
}

export default connect( 
    (state: any) => ({

    }), 
    (dispatch: any) => ({
        
    })
)( LeftBar );