// Import Modules
import { AnimaFoundryActor } from "./actor/actor.js";
import { AnimaFoundryActorSheet } from "./actor/actor-sheet.js";
import { AnimaFoundryItem } from "./item/item.js";
import { AnimaFoundryItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.animaFoundry = {
    AnimaFoundryActor,
    AnimaFoundryItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d100x>=90 + @initiative.value",
    decimals: 4
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = AnimaFoundryActor;
  CONFIG.Item.entityClass = AnimaFoundryItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("animaFoundry", AnimaFoundryActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("animaFoundry", AnimaFoundryItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});