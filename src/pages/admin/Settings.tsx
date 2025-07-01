
import React, { useState } from 'react';
import { Save, Bell, Shield, Palette, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
    marketing: false
  });

  const [security, setSecurity] = useState({
    twoFactor: true,
    sessionTimeout: false,
    loginAlerts: true
  });

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your admin panel preferences and configurations</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <nav className="space-y-2">
              {[
                { name: 'General', icon: Globe, active: true },
                { name: 'Notifications', icon: Bell, active: false },
                { name: 'Security', icon: Shield, active: false },
                { name: 'Appearance', icon: Palette, active: false },
              ].map((item) => (
                <button
                  key={item.name}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    item.active
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Settings content */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="siteName">Site Name</Label>
                <input
                  id="siteName"
                  type="text"
                  defaultValue="Admin Panel"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <Label htmlFor="siteDescription">Site Description</Label>
                <textarea
                  id="siteDescription"
                  rows={3}
                  defaultValue="Modern admin panel for managing your application"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <select
                  id="timezone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>UTC (GMT+0)</option>
                  <option>Eastern Time (GMT-5)</option>
                  <option>Pacific Time (GMT-8)</option>
                  <option>Central European Time (GMT+1)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              {[
                { key: 'email', label: 'Email Notifications', description: 'Receive notifications via email' },
                { key: 'push', label: 'Push Notifications', description: 'Receive push notifications in browser' },
                { key: 'sms', label: 'SMS Notifications', description: 'Receive SMS notifications for critical alerts' },
                { key: 'marketing', label: 'Marketing Updates', description: 'Receive updates about new features and promotions' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <div className="flex-1">
                    <Label htmlFor={item.key} className="font-medium">{item.label}</Label>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <Switch
                    id={item.key}
                    checked={notifications[item.key as keyof typeof notifications]}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, [item.key]: checked }))
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
            <div className="space-y-4">
              {[
                { key: 'twoFactor', label: 'Two-Factor Authentication', description: 'Add an extra layer of security to your account' },
                { key: 'sessionTimeout', label: 'Auto Session Timeout', description: 'Automatically log out after 30 minutes of inactivity' },
                { key: 'loginAlerts', label: 'Login Alerts', description: 'Get notified when someone logs into your account' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <div className="flex-1">
                    <Label htmlFor={item.key} className="font-medium">{item.label}</Label>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <Switch
                    id={item.key}
                    checked={security[item.key as keyof typeof security]}
                    onCheckedChange={(checked) => 
                      setSecurity(prev => ({ ...prev, [item.key]: checked }))
                    }
                  />
                </div>
              ))}
            </div>
            
            <Separator className="my-6" />
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Password</h4>
              <Button variant="outline">Change Password</Button>
              
              <h4 className="font-medium text-gray-900 mt-6">Danger Zone</h4>
              <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                <h5 className="font-medium text-red-900">Delete Account</h5>
                <p className="text-sm text-red-700 mt-1">This action cannot be undone</p>
                <Button variant="destructive" size="sm" className="mt-3">
                  Delete Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
