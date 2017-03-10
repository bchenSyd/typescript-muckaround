type PetTypes = 'bird' | 'fish'; // this is how you do enum

interface IBird {
    fly();
    layEggs();
}

interface IFish {
    swim();
    layEggs();
}


class Bird implements IBird {
    type = 'bird';
    fly() {
        console.log('bird is flying...')
    }
    layEggs() {
        console.log('bird is laying eggs...')
    }

}

class Fish implements IFish {
    type = <PetTypes>'fish';
    swim() {
        console.log('fish is swimming...')
    }
    layEggs() {
        console.log('fish is laying eggs...')
    }

}

function getSmallPet(): Fish | Bird {
    return new Bird();
}

let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // errors: If we have a value that has a union type, we can only access members that are common to all types in the union

(<IBird>pet).fly(); //need a cast to be able to call IBird functions


//********************************************************************************************** */
//There is no way to runtime check a TypeScript interface.


if (<IFish>pet) {
    //  (<IFish>pet).swim();  //errors: <IFish>pet always return true, it doesn't do real type check ; check compiled js for details
} 


if(pet instanceof Bird){ // this is a javascript feature, not typescript
    console.log('here is how you can do type check')
}
//**********************************************************************************************

