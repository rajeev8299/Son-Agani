import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { companyConfig } from '../src/data/companyInfo.js';

describe('Company Legal & Business Configuration', () => {
  it('contains official brand and legal entity name in Varanasi, UP', () => {
    assert.equal(companyConfig.brandName, 'SON AGNI SECURITIES');
    assert.equal(companyConfig.legalName, 'Sonagni Security Services Private Limited');
    assert.equal(companyConfig.registeredAddress.city, 'Varanasi');
    assert.equal(companyConfig.registeredAddress.state, 'Uttar Pradesh');
    assert.equal(companyConfig.registeredAddress.pincode, '221001');
  });

  it('contains verified contact phone numbers and email', () => {
    assert.equal(companyConfig.phoneNumbers.primary, '+91 96283 33391');
    assert.equal(companyConfig.phoneNumbers.secondary, '+91 94152 33391');
    assert.equal(companyConfig.email, 'sonagnisspvt.ltd.2025@mail.com');
  });

  it('contains exactly 5 official core service categories', () => {
    assert.equal(Array.isArray(companyConfig.services), true);
    assert.equal(companyConfig.services.length, 5);

    const serviceIds = companyConfig.services.map(s => s.id);
    assert.deepEqual(serviceIds, [
      'warehouse-storage-security',
      'construction-site-security',
      'access-control-visitor-management',
      'premises-patrolling-asset-protection',
      'shift-management-incident-response'
    ]);
  });
});
