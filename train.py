from tensorflow import keras
import tensorflowjs as tfjs

mnist = keras.datasets.mnist

(train_images, train_labels), (test_images, test_labels) = mnist.load_data()

model = keras.Sequential([
    keras.layers.Conv1D(
        input_shape=(28, 28),
        kernel_size=5,
        filters=8,
        strides=1,
        activation='relu',
        kernel_initializer='VarianceScaling'
    ),
    keras.layers.MaxPooling1D(
        pool_size=2,
        strides=2
    ),
    keras.layers.Conv1D(
        kernel_size=5,
        filters=16,
        strides=1,
        activation='relu',
        kernel_initializer='VarianceScaling'
    ),
    keras.layers.MaxPooling1D(
        pool_size=2,
        strides=2
    ),
    keras.layers.Flatten(),
    keras.layers.Dense(units=10, activation='softmax', kernel_initializer='VarianceScaling')
])

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

model.fit(train_images, train_labels, epochs=1)

test_loss, test_acc = model.evaluate(test_images, test_labels)

tfjs.converters.save_keras_model(model, './model')