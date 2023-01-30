/**
 * Implementation of Tensorflow Lite in MakeCode
 */

//% color="#ff6f00"
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
}

class Model {
    static COMPARE_TO_TEN = new Model((input: number) => {
        const variability = (Math.random() - 0.5) * 0.2;
        if (input < 10) {
            return 0 + variability;
        } else {
            return 5 + variability;
        }
    });

    _predictionSimulator: (input: any) => any;

    constructor(predictionSimulator: (input: any) => any) {
        this._predictionSimulator = predictionSimulator;
    }

    predict(input: any): any {
        return this._predictionSimulator(input);
    }
}

class TensorflowInstance {
    _model: Model;

    constructor(model: Model) {
        this._model = model;
    }

    makeInference(input: any): any {
        return this._model.predict(input);
    }
}
