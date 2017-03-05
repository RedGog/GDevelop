import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import ToolbarIcon from '../UI/ToolbarIcon';
import IconMenu from '../UI/Menu/IconMenu';

export default class MainFrameToolbar extends Component {
  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <ToolbarIcon
            onClick={this.props.toggleProjectManager}
            src="res/ribbon_default/projectManager32.png"
          />
          <IconMenu
            iconButtonElement={<ToolbarIcon src="res/ribbon_default/bug32.png" />}
            menuTemplate={[{
              label: "Load builtin game",
              click: () => this.props.loadBuiltinGame(),
            }, {
              label: "Request update from external editor",
              click: () => this.props.requestUpdate(),
            }]}
          />
          <ToolbarSeparator />
        </ToolbarGroup>
        {this.props.editorToolbar || <ToolbarGroup />}
      </Toolbar>
    );
  }
}
