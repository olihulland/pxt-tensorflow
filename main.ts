/**
 * Implementation of Tensorflow Lite in MakeCode
 */

//% color="#4C97FF"
namespace tensorflow {
    /**
     * Model trained to return 0 if < 10, or 5 if > 10.
     */
    //% block
    export function compareToTenModel() {
        return Model.COMPARE_TO_TEN;
    }

    /**
     * Create tensorflow instance using model
     */
    //% block
    export function createTfInstance(model: Model): TensorflowInstance {
        return new TensorflowInstance(model);
    }

    //% block
    export function makeInference(tfInstance: TensorflowInstance, input: any) {
        return tfInstance.makeInference(input);
    }
    

    // /**
    //  * This is a statement block
    //  */
    // //% block
    // export function show() {

    // }

    // /**
    //  * This is a statement block with a parameter
    //  */
    // //% block
    // export function move(steps: number) {

    // }

    // /**
    //  * This is a reporter block that returns a number
    //  */
    // //% block
    // export function randomNumber(): number {
    //     return 0;
    // }

    // /**
    //  * This is a reporter block that returns a boolean
    //  */
    // //% block
    // export function randomBoolean(): boolean {
    //     return false;
    // }

    // /**
    //  * This is an event handler block
    //  */
    // //% block="on event"
    // export function onEvent(handler: () => void) {

    // }
}

class Model {
    static COMPARE_TO_TEN = new Model();
}

class TensorflowInstance {
    _model: Model;

    constructor(model: Model) {
        this._model = model;
    }

    makeInference(input: any): any {
        return "prediction";
    }
}
