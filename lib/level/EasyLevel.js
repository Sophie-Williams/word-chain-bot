/* WordChainBot
Copyright (C) 2017  Astro

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>. */

const Level = require('./Level');
const Utils = require('../Utils');

class EasyLevel extends Level {
  constructor() {
    super('EasyLevel');
  }

  isAvailable(word, score, history) {
    const lastChar = Utils.getLastChar(word.getText());
    return score < 50 && history.filter(value => Utils.getLastChar(value) === lastChar).length < 3;
  }
}

module.exports = EasyLevel;