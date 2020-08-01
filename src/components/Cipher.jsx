import React, { useState } from 'react';
import { encode, decode } from '../util/cipher-util';

const Cipher = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [shiftValue, setShiftValue] = useState(3);

  const onEncode = () => {
    const encodedText = encode(plainText, shiftValue);
    setCipherText(encodedText);
  };

  const onDecode = () => {
    const decodedText = decode(cipherText, shiftValue);
    setPlainText(decodedText);
  };

  const onShiftUp = () => {
    setShiftValue(shiftValue + 1);
  };

  const onShiftDown = () => {
    setShiftValue(shiftValue - 1);
  };

  const clearPlainText = () => {
    setPlainText('');
  };

  const clearCipherText = () => {
    setCipherText('');
  };
  
  return (
    <div className='cipher-container'>
      <div className="instructions-container">
        <h2 className="accent-color">Instructions:</h2>
        <p>Change the shift amount by pressing the <span className="accent-color">-</span>/<span className="accent-color">+</span> buttons.</p>
        <p>Encrypt a message by submitting some text in the <span className="accent-color">Plaintext</span> box.</p>
        <p>Decrypt a message by submitting some text in the <span className="accent-color">Ciphertext</span> box.</p>
      </div>
      <div className='input-container shadow'>
        <div className="flex">
          <p>Plaintext</p>
          <button className='clear-button' onClick={clearPlainText}>clear</button>
        </div>
        <textarea
          placeholder={`Enter some text...`}
          onChange={(event) => setPlainText(event.target.value)}
          value={plainText}
          name='plain-text'
          maxLength='500'
          rows='8'
          wrap='soft'
        >
        </textarea>
        <button className='button' onClick={onEncode}>Encrypt</button>
      </div>
      <div className='controls-group'>
        <button className='counter-button' onClick={onShiftDown}>-</button>
        <div className='counter-number'>
          <p className='counter-text'>{shiftValue}</p>
        </div>
        <button className='counter-button' onClick={onShiftUp}>+</button>
      </div>
      <div className='input-container shadow'>
        <div className="flex">
          <p>Ciphertext</p>
          <button className='clear-button' onClick={clearCipherText}>clear</button>
        </div>
        <textarea
          placeholder={`Enter some text...`}
          onChange={(event) => setCipherText(event.target.value)}
          value={cipherText}
          name='cipher-text'
          maxLength='500'
          rows='8'
          wrap='soft'
        >
        </textarea>
        <button className='button' onClick={onDecode}>Decrypt</button>
      </div>
    </div>
  );
};

export default Cipher;