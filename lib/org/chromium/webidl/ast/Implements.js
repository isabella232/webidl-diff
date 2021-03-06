// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

foam.CLASS({
  package: 'org.chromium.webidl.ast',
  name: 'Implements',
  extends: 'org.chromium.webidl.ast.DefinitionData',

  properties: [
    {
      class: 'FObjectProperty',
      of: 'org.chromium.webidl.ast.Literal',
      name: 'implementer',
    },
    {
      class: 'FObjectProperty',
      of: 'org.chromium.webidl.ast.Literal',
      name: 'implemented',
    },
    {
      name: 'id',
      factory: function() {
        return this.getName();
      },
    },
  ],

  methods: [
    function getName() {
      var implementer = this.implementer.literal;
      var implemented = this.implemented.literal;
      return `${implementer}:${implemented}`;
    },
    function outputWebIDL(o) {
      this.SUPER(o);
      o.outputObj(this.implementer).outputStrs(' implements ')
          .outputObj(this.implemented).outputStrs(';');
    },
  ],
});
