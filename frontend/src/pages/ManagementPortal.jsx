import React from 'react';

const ManagementPortal = () => {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col gap-12">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-surface-variant pb-6">
        <div>
          <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-background mb-2">Inventory Stock Checker</h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">Real-time visibility into product availability across our primary distribution centers in Kampala and Entebbe.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">filter_list</span>
            <select className="w-full bg-surface-container-lowest text-on-surface text-body-md font-body-md rounded py-2 pl-10 pr-8 border border-outline/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none cursor-pointer">
              <option value="all">All Branches</option>
              <option value="kampala">Kampala HQ</option>
              <option value="entebbe">Entebbe Branch</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
          </div>
          <button className="flex items-center justify-center p-2 bg-surface-container rounded text-on-surface hover:bg-surface-variant transition-colors" title="Refresh Data">
            <span className="material-symbols-outlined">refresh</span>
          </button>
        </div>
      </header>
      
      {/* Mobile Search (Visible only on small screens) */}
      <div className="md:hidden relative w-full mb-6">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
        <input className="w-full bg-surface-container text-on-surface text-body-md font-body-md rounded py-3 pl-10 pr-4 border border-outline/20 focus:border-primary outline-none" placeholder="Search SKU or product..." type="text" />
      </div>

      {/* Layout Grid: Map/Overview (Left) & Data Table (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Context / Map Overview */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Map Card */}
          <div className="bg-surface-container-lowest rounded-lg border border-surface-variant overflow-hidden ambient-shadow flex flex-col h-full">
            <div className="p-4 border-b border-surface-variant flex justify-between items-center bg-surface-bright">
              <h2 className="text-label-md font-label-md text-on-surface">Branch Locations</h2>
              <span className="material-symbols-outlined text-secondary text-sm">map</span>
            </div>
            <div className="relative h-64 bg-surface-container flex-grow">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFpgSCO0kWLBkUr30L_g9zkDQ0oGLu7-2foiU1PUHO9YeOyJ7d4ZPEkh2RprASroP4bn2XYh-kAeQY2J6VIaPFvsgApVhJ8xgYlvz1WCsP3YjUaiBaJFp2lkjIQn1xx5sUh5oht8mpl-WhXi3nz1SFb9z4uW_x6JkwAl4UBQk4m1gZN7N0qqQMXTvE3LcYAyJIBsrSAMo0ry7mkyDETIkThvMV5uTj6pWVvHR9PO9L0d8BMoa2LuNy")' }}></div>
              {/* Overlay Markers */}
              <div className="absolute top-1/4 left-1/3 flex flex-col items-center group cursor-pointer">
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-sm group-hover:scale-125 transition-transform"></div>
                <div className="mt-1 bg-inverse-surface text-surface-container-lowest text-xs font-label-md px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity absolute top-5 whitespace-nowrap z-10">
                  Kampala HQ<br />
                  <span className="text-tertiary-fixed font-normal">Active</span>
                </div>
              </div>
              <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center group cursor-pointer">
                <div className="w-4 h-4 bg-secondary rounded-full border-2 border-white shadow-sm group-hover:scale-125 transition-transform"></div>
                <div className="mt-1 bg-inverse-surface text-surface-container-lowest text-xs font-label-md px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity absolute top-5 whitespace-nowrap z-10">
                  Entebbe Branch<br />
                  <span className="text-tertiary-fixed font-normal">Active</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-surface-bright border-t border-surface-variant text-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-on-surface-variant">System Status</span>
                <span className="flex items-center gap-1 text-success-eco font-medium">
                  <span className="w-2 h-2 rounded-full bg-success-eco animate-pulse"></span>
                  Live Sync
                </span>
              </div>
              <p className="text-on-surface-variant text-xs">Last updated: Just now</p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-4 rounded-lg border border-surface-variant ambient-shadow flex flex-col">
              <span className="text-label-md font-label-md text-on-surface-variant mb-1">Low Stock Alerts</span>
              <span className="text-headline-md font-headline-md text-error">12</span>
              <span className="text-xs text-on-surface-variant mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">arrow_upward</span> Items requiring attention</span>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-lg border border-surface-variant ambient-shadow flex flex-col">
              <span className="text-label-md font-label-md text-on-surface-variant mb-1">Transfer Requests</span>
              <span className="text-headline-md font-headline-md text-on-surface">4</span>
              <span className="text-xs text-on-surface-variant mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-secondary">pending_actions</span> Pending approval</span>
            </div>
          </div>
        </div>
        
        {/* Right Column: Data Table */}
        <div className="lg:col-span-8 flex flex-col">
          <div className="bg-surface-container-lowest rounded-lg border border-surface-variant overflow-hidden ambient-shadow flex-grow flex flex-col">
            <div className="p-4 border-b border-surface-variant flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-bright">
              <h2 className="text-headline-md font-headline-md text-on-surface text-lg">Inventory List</h2>
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 text-label-md font-label-md bg-surface-container text-on-surface hover:bg-surface-variant rounded px-4 py-2 transition-all">
                  <span className="material-symbols-outlined text-sm">download</span>
                  Export
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto flex-grow">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-surface border-b border-surface-variant text-label-md font-label-md text-on-surface-variant">
                    <th className="py-3 px-4 font-semibold uppercase tracking-wider text-xs">Product Details</th>
                    <th className="py-3 px-4 font-semibold uppercase tracking-wider text-xs">SKU</th>
                    <th className="py-3 px-4 font-semibold uppercase tracking-wider text-xs">Branch</th>
                    <th className="py-3 px-4 font-semibold uppercase tracking-wider text-xs">Stock Level</th>
                    <th className="py-3 px-4 font-semibold uppercase tracking-wider text-xs text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-body-md font-body-md divide-y divide-surface-variant">
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-bright transition-colors group">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-surface-container overflow-hidden shrink-0">
                          <img alt="EcoFire Pro Max" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVnfK8aiu0GYekEFKscgqATuvWlbBinMmaj0vj0abE4SoETbn0rFgHmXUtTu7eVZDRK9WtnTb9HzAdz4gzRnBFW3vykmNUDa8i5A4G7jKsoXtiFBqqMLu4f6jUuvRKBzui0f7s7CHYKEtIu_sqLwRfr2khnC5kjCMRTu5O4JrLsAxYeJTTGnpuLoTkQtykH5qPfXwJk0iCfbwBD4WoVeG6GeNxHlp1puMW11mn3T_KwDy8Pc9W8QTF" />
                        </div>
                        <div>
                          <p className="font-medium text-on-surface line-clamp-1">EcoFire Pro Max</p>
                          <p className="text-xs text-on-surface-variant">Industrial Stove</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono text-sm text-on-surface-variant">FG-STV-001</td>
                    <td className="py-4 px-4">Kampala HQ</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-success-eco/10 text-success-eco text-xs font-label-md">
                          <span className="material-symbols-outlined text-[14px] mr-1" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                          Ready for Pickup
                        </span>
                        <span className="text-sm font-medium">145 Units</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="text-primary hover:text-surface-tint text-sm font-label-md transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                        Request Transfer
                      </button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="bg-surface-bright/50 hover:bg-surface-bright transition-colors group">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-surface-container overflow-hidden shrink-0">
                          <img alt="Heavy-Duty Cauldron" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvAQv1MQz0vgG6H1ixgEM2awADrKgu3ie1Y948-9IKzkeHJIKzObeFHGbTx_nYeteGw-QDoNPCDEN-i67iFa3gkUGNxSLUkD4iJenq4s1IVAO1K__K78Z-vLx37UnY_d4BVaQgXW-6pRJVqz5RMcSd2BbOcUBr2Djnf8uvsqIvOwEJ3Xdk7jsnlhngnhUn-B4ysWnJi6rTnlPQYy5gA88FLwiNiXqaOXiI5MpGbzAs7IfIYKXm9Gii" />
                        </div>
                        <div>
                          <p className="font-medium text-on-surface line-clamp-1">Heavy-Duty Cauldron</p>
                          <p className="text-xs text-on-surface-variant">Cookware - 50L</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono text-sm text-on-surface-variant">FG-CKW-050</td>
                    <td className="py-4 px-4">Entebbe Branch</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-secondary-container/20 text-secondary text-xs font-label-md">
                          <span className="material-symbols-outlined text-[14px] mr-1">local_shipping</span>
                          Ships in 2 Days
                        </span>
                        <span className="text-sm font-medium">12 Units</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="text-primary hover:text-surface-tint text-sm font-label-md transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                        Request Transfer
                      </button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-surface-bright transition-colors group">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-surface-container overflow-hidden shrink-0 flex items-center justify-center bg-surface-variant">
                          <span className="material-symbols-outlined text-secondary">image</span>
                        </div>
                        <div>
                          <p className="font-medium text-on-surface line-clamp-1">Thermal Insulation Jacket</p>
                          <p className="text-xs text-on-surface-variant">Accessories</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono text-sm text-on-surface-variant">FG-ACC-012</td>
                    <td className="py-4 px-4">Kampala HQ</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-error-container text-on-error-container text-xs font-label-md">
                          <span className="material-symbols-outlined text-[14px] mr-1">warning</span>
                          Out of Stock
                        </span>
                        <span className="text-sm font-medium text-error">0 Units</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="text-on-surface-variant text-sm font-label-md cursor-not-allowed opacity-50">
                        Transfer Unavailable
                      </button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="bg-surface-bright/50 hover:bg-surface-bright transition-colors group">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-surface-container overflow-hidden shrink-0 flex items-center justify-center bg-surface-variant">
                          <span className="material-symbols-outlined text-secondary">image</span>
                        </div>
                        <div>
                          <p className="font-medium text-on-surface line-clamp-1">Compact Bio-Stove</p>
                          <p className="text-xs text-on-surface-variant">Stoves - Domestic</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono text-sm text-on-surface-variant">FG-STV-002</td>
                    <td className="py-4 px-4">Kampala HQ</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-success-eco/10 text-success-eco text-xs font-label-md">
                          <span className="material-symbols-outlined text-[14px] mr-1" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                          Ready for Pickup
                        </span>
                        <span className="text-sm font-medium">85 Units</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="text-primary hover:text-surface-tint text-sm font-label-md transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                        Request Transfer
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Pagination (Simulated) */}
            <div className="p-4 border-t border-surface-variant bg-surface flex justify-between items-center text-sm text-on-surface-variant">
              <span>Showing 1-4 of 128 products</span>
              <div className="flex items-center gap-2">
                <button className="p-1 rounded hover:bg-surface-container disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <span className="px-2 font-medium text-on-surface">1</span>
                <span className="px-2">2</span>
                <span className="px-2">3</span>
                <span className="px-1">...</span>
                <button className="p-1 rounded hover:bg-surface-container">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManagementPortal;
