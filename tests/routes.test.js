import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ROUTES, getServiceDetailRoute } from '../src/config/routes.js';

describe('Application Route Definitions', () => {
  it('defines all required public pages and route patterns', () => {
    assert.equal(ROUTES.HOME, '/');
    assert.equal(ROUTES.ABOUT, '/about');
    assert.equal(ROUTES.SERVICES, '/services');
    assert.equal(ROUTES.SERVICE_DETAILS, '/services/:id');
    assert.equal(ROUTES.OUR_GUARDS, '/our-guards');
    assert.equal(ROUTES.CAREERS, '/careers');
    assert.equal(ROUTES.TESTIMONIALS, '/testimonials');
    assert.equal(ROUTES.CONTACT, '/contact');
    assert.equal(ROUTES.GET_QUOTE, '/get-a-quote');
    assert.equal(ROUTES.NOT_FOUND, '*');
  });

  it('generates encoded dynamic service detail routes', () => {
    assert.equal(
      getServiceDetailRoute('warehouse-storage-security'),
      '/services/warehouse-storage-security'
    );
    assert.equal(
      getServiceDetailRoute('construction-site-security'),
      '/services/construction-site-security'
    );
    assert.equal(
      getServiceDetailRoute('access-control-visitor-management'),
      '/services/access-control-visitor-management'
    );
  });
});
