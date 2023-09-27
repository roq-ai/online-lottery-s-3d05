interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Game Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Game Administrator', 'Customer Support Representative'],
  tenantName: 'Operator',
  applicationName: 'Online Lottery System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal information',
    'Edit personal information',
    'View available games',
    'Participate in lottery games',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage customers',
    'Manage customer support representatives',
    'Manage game administrators',
    'Manage operators',
    'Manage lottery games',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/995d6e54-9fb3-4b73-ab9a-a5d5ef757970',
};
