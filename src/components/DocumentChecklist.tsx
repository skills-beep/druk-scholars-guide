
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { FileText, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface Document {
  id: string;
  name: string;
  description: string;
  required: boolean;
  category: 'academic' | 'personal' | 'financial' | 'application';
  deadline?: string;
}

const DocumentChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const documents: Document[] = [
    // Academic Documents
    { id: '1', name: 'Class 12 Marksheet', description: 'Original and photocopies', required: true, category: 'academic' },
    { id: '2', name: 'Class 10 Marksheet', description: 'Original and photocopies', required: true, category: 'academic' },
    { id: '3', name: 'Migration Certificate', description: 'From previous school/college', required: true, category: 'academic' },
    { id: '4', name: 'Character Certificate', description: 'From previous institution', required: true, category: 'academic' },
    { id: '5', name: 'Transcript', description: 'For degree/diploma courses', required: false, category: 'academic' },
    
    // Personal Documents
    { id: '6', name: 'Citizenship ID Card', description: 'Original and photocopies', required: true, category: 'personal' },
    { id: '7', name: 'Passport Size Photos', description: '4-6 recent photographs', required: true, category: 'personal' },
    { id: '8', name: 'Medical Certificate', description: 'From registered medical practitioner', required: true, category: 'personal' },
    { id: '9', name: 'Security Clearance', description: 'From Royal Bhutan Police', required: false, category: 'personal' },
    
    // Financial Documents
    { id: '10', name: 'Income Certificate', description: 'Parent/Guardian income proof', required: true, category: 'financial' },
    { id: '11', name: 'Bank Statement', description: 'Last 6 months', required: false, category: 'financial' },
    { id: '12', name: 'Scholarship Documents', description: 'If applying for financial aid', required: false, category: 'financial' },
    
    // Application Documents
    { id: '13', name: 'Application Form', description: 'Completed and signed', required: true, category: 'application' },
    { id: '14', name: 'Statement of Purpose', description: 'For competitive programs', required: false, category: 'application' },
    { id: '15', name: 'Recommendation Letters', description: '2-3 letters from teachers/employers', required: false, category: 'application' },
  ];

  const handleCheck = (documentId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(documentId)) {
      newCheckedItems.delete(documentId);
    } else {
      newCheckedItems.add(documentId);
    }
    setCheckedItems(newCheckedItems);
  };

  const requiredDocuments = documents.filter(doc => doc.required);
  const completedRequired = requiredDocuments.filter(doc => checkedItems.has(doc.id)).length;
  const progressPercentage = (completedRequired / requiredDocuments.length) * 100;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic': return '🎓';
      case 'personal': return '👤';
      case 'financial': return '💰';
      case 'application': return '📝';
      default: return '📄';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'border-blue-200 bg-blue-50 dark:bg-blue-950';
      case 'personal': return 'border-green-200 bg-green-50 dark:bg-green-950';
      case 'financial': return 'border-yellow-200 bg-yellow-50 dark:bg-yellow-950';
      case 'application': return 'border-purple-200 bg-purple-50 dark:bg-purple-950';
      default: return 'border-gray-200 bg-gray-50 dark:bg-gray-950';
    }
  };

  const groupedDocuments = documents.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {} as Record<string, Document[]>);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
            <FileText className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">Document Checklist</CardTitle>
        <CardDescription>
          Track your application documents and ensure you have everything ready
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Progress Overview */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Required Documents Progress</h3>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-medium">{completedRequired}/{requiredDocuments.length}</span>
            </div>
          </div>
          <Progress value={progressPercentage} className="h-3 mb-2" />
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {progressPercentage === 100 ? 
              "🎉 All required documents checked!" : 
              `${Math.round(progressPercentage)}% complete - ${requiredDocuments.length - completedRequired} documents remaining`
            }
          </p>
        </div>

        {/* Document Categories */}
        <div className="space-y-6">
          {Object.entries(groupedDocuments).map(([category, docs]) => (
            <div key={category} className={`border-2 rounded-lg p-4 ${getCategoryColor(category)}`}>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-xl">{getCategoryIcon(category)}</span>
                {category.charAt(0).toUpperCase() + category.slice(1)} Documents
              </h3>
              
              <div className="space-y-3">
                {docs.map((doc) => (
                  <div key={doc.id} className="flex items-start space-x-3 p-3 bg-white dark:bg-slate-700 rounded-lg">
                    <Checkbox
                      id={doc.id}
                      checked={checkedItems.has(doc.id)}
                      onCheckedChange={() => handleCheck(doc.id)}
                      className="mt-1"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <label htmlFor={doc.id} className="font-medium cursor-pointer">
                          {doc.name}
                        </label>
                        {doc.required ? (
                          <Badge variant="destructive" className="text-xs">Required</Badge>
                        ) : (
                          <Badge variant="secondary" className="text-xs">Optional</Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {doc.description}
                      </p>
                      {doc.deadline && (
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3 text-orange-500" />
                          <span className="text-xs text-orange-600">Deadline: {doc.deadline}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Important Notes:</h4>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Always carry original documents for verification</li>
                <li>• Keep multiple photocopies of all documents</li>
                <li>• Some colleges may require additional documents</li>
                <li>• Check specific requirements for your chosen program</li>
                <li>• Submit documents before the deadline</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentChecklist;
