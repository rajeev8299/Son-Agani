import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { 
  isValidIndianPhone, 
  isValidEmail, 
  isValidText, 
  sanitizeString 
} from '../src/utils/validators.js';

describe('Form & Input Validators', () => {
  it('validates genuine Indian mobile phone numbers', () => {
    assert.equal(isValidIndianPhone('9628333391'), true);
    assert.equal(isValidIndianPhone('+919628333391'), true);
    assert.equal(isValidIndianPhone('+91 96283 33391'), true);
    assert.equal(isValidIndianPhone('09628333391'), true);
    assert.equal(isValidIndianPhone('9415233391'), true);

    // Invalid numbers
    assert.equal(isValidIndianPhone('1234567890'), false);
    assert.equal(isValidIndianPhone('5555555555'), false);
    assert.equal(isValidIndianPhone('96283'), false);
    assert.equal(isValidIndianPhone(''), false);
    assert.equal(isValidIndianPhone(null), false);
  });

  it('validates corporate email addresses', () => {
    assert.equal(isValidEmail('sonagnisspvt.ltd.2025@mail.com'), true);
    assert.equal(isValidEmail('info@sonagnisecurities.com'), true);
    assert.equal(isValidEmail('contact.team@domain.co.in'), true);

    // Invalid emails
    assert.equal(isValidEmail('invalid-email'), false);
    assert.equal(isValidEmail('test@'), false);
    assert.equal(isValidEmail('@domain.com'), false);
    assert.equal(isValidEmail(''), false);
    assert.equal(isValidEmail(undefined), false);
  });

  it('validates non-empty text input with min length', () => {
    assert.equal(isValidText('Security Guard', 2), true);
    assert.equal(isValidText('   Varanasi   ', 3), true);
    assert.equal(isValidText('A', 2), false);
    assert.equal(isValidText('   ', 1), false);
    assert.equal(isValidText('', 1), false);
  });

  it('sanitizes and caps string lengths safely', () => {
    assert.equal(sanitizeString('  Clean Me  ', 10), 'Clean Me');
    assert.equal(sanitizeString('SuperLongStringExceedingLimit', 10), 'SuperLongS');
    assert.equal(sanitizeString(null), '');
    assert.equal(sanitizeString(undefined), '');
  });
});
