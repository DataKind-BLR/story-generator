import React from 'react';
import RightSidebar from '../views/rightsidebar/RightSidebar';
import Choropleth from "../views/visualization/Choropleth";
import GraphComponent from "../views/visualization/GraphComponent";
import { themes, getSubThemes, getTopics } from "../../data";

class AppController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            budgetAttr: "complied",
            viewBy: "choropleth",
            sectorSelected: {},
            indicatorData: {},
            sectorName: '',
            selectedIndicator: {},
            selectedSubTheme: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.onChangeBudgetAttr = this.onChangeBudgetAttr.bind(this);
    }

    componentWillMount() {
        if (this.props.params == undefined || this.props.params.topic == undefined) return;
        const { theme, sub_theme, topic } = this.props.params;
        const sub_theme_url_slug = `${theme}/${sub_theme}`;
        const theme_entity = themes.filter(t => t.url_slug === theme).shift();
        const sub_theme_entity = getSubThemes(theme_entity).filter(s => s.url_slug === sub_theme).shift();
        const topic_entity = getTopics(sub_theme_entity).filter(t => t.url_slug === topic).shift();
        this.setState({ indicatorData: topic_entity.data, sectorName: sub_theme_entity.name, sectorSelected: sub_theme, selectedIndicator: topic_entity, selectedSubTheme: sub_theme_entity });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.params == undefined || this.props.params.topic == undefined) return;
        const { theme, sub_theme, topic } = this.props.params;
        const sub_theme_url_slug = `${theme}/${sub_theme}`;
        const theme_entity = themes.filter(t => t.url_slug === theme).shift();
        const sub_theme_entity = getSubThemes(theme_entity).filter(s => s.url_slug === sub_theme).shift();
        const topic_entity = getTopics(sub_theme_entity).filter(t => t.url_slug === topic).shift();
        if (prevState.indicatorData != topic_entity.data) {
            this.setState({ indicatorData: topic_entity.data, sectorName: sub_theme_entity.name, sectorSelected: sub_theme, selectedIndicator: topic_entity, selectedSubTheme: sub_theme_entity });
        }
    }

    handleChange(value) {
        this.setState({ viewBy: value });
    }

    onChangeBudgetAttr(value) {
        this.setState({ budgetAttr: value });
    }

    render() {
        if (this.props.params == undefined || this.props.params.topic == undefined) return null;
        return (
            <div>
                <div className="col-lg-12" >
                    <div id="vis-container" >
                        <Choropleth
                            subtitle={this.state.selectedSubTheme.description}
                            title={this.state.selectedIndicator.description}
                            data={this.state.indicatorData}
                            attrType={this.state.budgetAttr}
                            selectedIndicator={this.state.selectedIndicator}
                            selectedSector={this.state.sectorSelected}
                            sectorName={this.state.sectorSelected.description}
                            notes={this.state.selectedIndicator.notes} />
                    </div>
                </div>
            </div>
        );
    }
}

AppController.propTypes = {
    params: React.PropTypes.object
};

export default AppController;
