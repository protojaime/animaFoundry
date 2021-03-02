/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class AnimaFoundryActor extends Actor {

  /**
   * Augment the basic actor data with additional dynamic data.
   */
  prepareData() {
    super.prepareData();

    const actorData = this.data;
    const data = actorData.data;
    const flags = actorData.flags;

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    if (actorData.type === 'character') this._prepareCharacterData(actorData);
  }

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
    const data = actorData.data;

    // Make modifications to data here. For example:

    // Loop through ability scores, and add their modifiers to our sheet output.
    for (let [key, ability] of Object.entries(data.abilities)) {
      // Calculate the modifier using d20 rules.
     
      ability.mod = 0;
       /*
      if(ability.value==1){ability.mod = -30}else
      if(ability.value<5 && ability.value>1){ability.mod = -5*2**(5-1-ability.value)}else
      if(ability.value<=20 && ability.value>5){ability.mod = (ability.value-5)/9 }else
      if(ability.value<5){}else
      if(ability.value<5){}else
      {}
*/
 
    }
  }

}