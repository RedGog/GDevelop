import React, { Component } from 'react';
import {ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import ToolbarIcon from '../../UI/ToolbarIcon';
import IconMenu from '../../UI/Menu/IconMenu';

export default class Toolbar extends Component {
  render() {
    return (<ToolbarGroup
      lastChild
    >
      {this.props.showPreviewButton &&
        <ToolbarIcon
          onClick={this.props.onPreview}
          src="res/ribbon_default/preview32.png"
        />
      }
      {this.props.showPreviewButton &&
        <ToolbarSeparator />}
      <ToolbarIcon
        onClick={this.props.toggleObjectsList}
        src="res/ribbon_default/add32.png"
      />
      <ToolbarIcon
        onClick={this.props.deleteSelection}
        src="res/ribbon_default/deleteselected32.png"
        disabled={!this.props.instancesSelection.getSelectedInstances().length}
      />
      <ToolbarIcon
        onClick={this.props.toggleInstancesList}
        src="res/ribbon_default/ObjectsPositionsList32.png"
      />
      <ToolbarIcon
        onClick={this.props.toggleLayersList}
        src="res/ribbon_default/layers32.png"
      />
      <IconMenu
        iconButtonElement={<ToolbarIcon src="res/ribbon_default/grid32.png" />}
        menuTemplate={[{
          label: "Show grid",
          click: () => this.props.toggleGrid(),
        }, {
          label: "Setup grid",
          click: () => this.props.openSetupGrid(),
        }]}
      >
      </IconMenu>
      <IconMenu
        iconButtonElement={<ToolbarIcon src="res/ribbon_default/zoom32.png" />}
        menuTemplate={[
          { label: "5%", click: () => this.props.setZoomFactor(0.05)},
          { label: "10%", click: () => this.props.setZoomFactor(0.10)},
          { label: "25%", click: () => this.props.setZoomFactor(0.25)},
          { label: "50%", click: () => this.props.setZoomFactor(0.50)},
          { label: "100%", click: () => this.props.setZoomFactor(1.00)},
          { label: "150%", click: () => this.props.setZoomFactor(1.50)},
          { label: "200%", click: () => this.props.setZoomFactor(2.00)},
        ]}
      >
      </IconMenu>
    </ToolbarGroup>);
  }
}
