/**
 * Generated by `./scripts/prebuild/generate-icons.ts`.
 * Run `yarn generate-icons` to regenerate.
 */
import React from 'react';
import { findClosestGlyphAvailable, Icon } from "../../";
export function IconPlaybackSpeed1x(props) {
  var _props$autoMirror;

  /* prettier-ignore */
  var iconList = [{
    'size': 16,
    'svgContent': '<path d=\'M4.485 2.37c0 .734-.759 1.533-1.957 1.533h-.417v1.5h2.374v7.992h1.5V2.37h-1.5zm9.935 6.043l-1.97 1.97 1.97 1.97-1.061 1.06-1.97-1.97-1.97 1.97-1.06-1.06 1.97-1.97-1.97-1.97 1.06-1.06 1.97 1.969 1.97-1.97 1.06 1.061z\'/>'
  }, {
    'size': 24,
    'svgContent': '<path d=\'M7.578 4c0 1.146-1.174 2.345-2.967 2.345H4v2h3.578v11.809h2V4h-2zm13.072 9.755l-2.542 2.543 2.543 2.543-1.415 1.414-2.543-2.543-2.543 2.543-1.414-1.414 2.543-2.543-2.543-2.543 1.414-1.414 2.543 2.543 2.543-2.543 1.415 1.414z\'/>'
  }];
  var closestSize = findClosestGlyphAvailable(iconList, props.iconSize || 24);

  var titleTag = function titleTag(title, titleId) {
    return title ? "<title ".concat(titleId ? "id=\"".concat(titleId, "\"") : "", ">").concat(title, "</title>") : "";
  };

  var descTag = function descTag(desc, descId) {
    return desc ? "<desc ".concat(descId ? "id=\"".concat(descId, "\"") : "", ">").concat(desc, "</desc>") : "";
  };

  var autoMirror = (_props$autoMirror = props.autoMirror) !== null && _props$autoMirror !== void 0 ? _props$autoMirror : false;
  return /*#__PURE__*/React.createElement(Icon, Object.assign({}, props, {
    autoMirror: autoMirror,
    viewBox: "0 0 ".concat(closestSize.size, " ").concat(closestSize.size),
    dangerouslySetInnerHTML: {
      __html: "".concat(titleTag(props.title, props.titleId)).concat(descTag(props.desc, props.descId)).concat(closestSize.svgContent)
    }
  }));
}
/**
 * @deprecated The name Experimental__IconPlaybackSpeed1x is deprecated and will be archived soon. Use IconPlaybackSpeed1x instead.
 */

export function Experimental__IconPlaybackSpeed1x(props) {
  return /*#__PURE__*/React.createElement(IconPlaybackSpeed1x, props);
}