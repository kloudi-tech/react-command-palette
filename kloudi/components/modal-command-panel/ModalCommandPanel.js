import React, { useState } from "react";

import CommandPalette from "../../command-pallete";
import ModalCommandPanelHeader from "./header/ModalCommandPanelHeader";
import ModalCommandPanelTheme from "./ModalCommandPanelTheme";
import QuerySuggestions from "../query-suggestions/QuerySuggestions";

import "./modal-command-panel.css";

import DEFAULT_SUGGESTIONS from "../../data/default-suggestions";
import DEFAULT_HOTKEYS from "../../data/default-modal-hotkeys.json";
import DEFAULT_QUICK_SEARCH_HOTKEYS from "../../data/default-quick-search-hotkeys.json";

export default function ModalCommandPanel(props) {
  const [commands, setCommands] = useState(
    DEFAULT_SUGGESTIONS.filter((item) => item.mode === "SEARCH")
  );
  const [closeOnSelect, setCloseOnSelect] = useState(
    props.closeOnSelect || false
  );
  const [hotkeys, setHotkeys] = useState(DEFAULT_HOTKEYS);
  const [mode, setMode] = useState("SEARCH");
  const [showSpinnerOnSelect, setShowSpinnerOnSelect] = useState(
    props.showSpinnerOnSelect || false
  );

  const handleCommandPanelModeChaned = (mode, prevMode) => {
    setMode(mode);
    setCommands(
      DEFAULT_SUGGESTIONS.filter((item) => {
        if (!mode) return item;
        else if (item.mode === mode) return item;
      })
    );
    if (mode === "QUICK_SEARCH") setHotkeys(DEFAULT_QUICK_SEARCH_HOTKEYS);
    else setHotkeys(DEFAULT_HOTKEYS);
  };

  return (
    <CommandPalette
      commands={commands}
      closeOnSelect={closeOnSelect}
      header={ModalCommandPanelHeader(mode)}
      highlightFirstSuggestion
      hotKeys={hotkeys}
      maxDisplayed={100}
      mode={mode}
      onCommandPanelModeChanged={handleCommandPanelModeChaned}
      onSelect={(command) => {
        alert(`A suggested command was selected: \n
      ${JSON.stringify(command)}
      `);
      }}
      placeholder="Type your query"
      renderCommand={QuerySuggestions}
      resetInputOnClose
      showSpinnerOnSelect={showSpinnerOnSelect}
      theme={ModalCommandPanelTheme}
    />
  );
}
