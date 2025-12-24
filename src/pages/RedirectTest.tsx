import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const BASE_URL = "https://swindonblockeddrains.co.uk";

const TEST_REDIRECTS = [
  {
    legacy: "/location/swindon/",
    expected: "/locations/swindon",
    description: "Basic location redirect with trailing slash",
  },
  {
    legacy: "/location/swindon",
    expected: "/locations/swindon",
    description: "Basic location redirect without trailing slash",
  },
  {
    legacy: "/location/swindon/blocked-drains/blocked-toilet",
    expected: "/locations/swindon/blocked-drains/blocked-toilet",
    description: "Nested sub-service redirect",
  },
  {
    legacy: "/location/highworth/drain-jetting/domestic-jetting?utm=test",
    expected: "/locations/highworth/drain-jetting/domestic-jetting?utm=test",
    description: "Redirect with query parameters",
  },
  {
    legacy: "/location/royal-wootton-bassett",
    expected: "/locations/royal-wootton-bassett",
    description: "Location with hyphenated name",
  },
  {
    legacy: "/location/cricklade/cctv-drain-surveys",
    expected: "/locations/cricklade/cctv-drain-surveys",
    description: "Service in location redirect",
  },
];

interface TestResult {
  legacy: string;
  status: "pending" | "success" | "error";
  finalUrl?: string;
  statusCode?: number;
  message?: string;
}

export default function RedirectTest() {
  const [results, setResults] = useState<TestResult[]>([]);
  const [testing, setTesting] = useState(false);

  const testRedirect = async (legacy: string): Promise<TestResult> => {
    try {
      // We can't actually test 301s from browser JS due to CORS
      // This page is for manual testing - open links in new tabs
      return {
        legacy,
        status: "pending",
        message: "Open link to test manually",
      };
    } catch (error) {
      return {
        legacy,
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error",
      };
    }
  };

  const runTests = async () => {
    setTesting(true);
    const newResults: TestResult[] = [];
    
    for (const test of TEST_REDIRECTS) {
      const result = await testRedirect(test.legacy);
      newResults.push(result);
    }
    
    setResults(newResults);
    setTesting(false);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">301 Redirect Test Page</CardTitle>
            <CardDescription>
              Test the legacy /location/* to /locations/* redirects. Click each link to verify 
              it returns a 301 status and redirects to the correct URL.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">How to Test:</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Open browser DevTools (F12) → Network tab</li>
                <li>Click a "Test Link" button below</li>
                <li>Check that the first request shows status 301</li>
                <li>Verify the final URL matches the "Expected" URL</li>
                <li>Confirm the page loads correctly (status 200)</li>
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Test Cases:</h3>
              
              {TEST_REDIRECTS.map((test, index) => (
                <div 
                  key={index} 
                  className="border rounded-lg p-4 space-y-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {test.description}
                      </p>
                      <div className="space-y-1">
                        <p className="text-sm">
                          <span className="text-muted-foreground">Legacy:</span>{" "}
                          <code className="bg-destructive/10 text-destructive px-1 rounded text-xs">
                            {test.legacy}
                          </code>
                        </p>
                        <p className="text-sm">
                          <span className="text-muted-foreground">Expected:</span>{" "}
                          <code className="bg-primary/10 text-primary px-1 rounded text-xs">
                            {test.expected}
                          </code>
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a 
                        href={`${BASE_URL}${test.legacy}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Test Link
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Expected Results:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>First request returns HTTP 301 (Moved Permanently)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Location header points to /locations/* URL</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Final page loads with HTTP 200</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Query parameters are preserved</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-amber-800 dark:text-amber-200">
                    Note: This page is for manual testing only
                  </p>
                  <p className="text-amber-700 dark:text-amber-300 mt-1">
                    Due to browser security (CORS), we cannot programmatically verify 301 redirects 
                    from JavaScript. Use browser DevTools or command-line tools like curl to verify:
                  </p>
                  <pre className="mt-2 bg-amber-100 dark:bg-amber-900/30 p-2 rounded text-xs overflow-x-auto">
                    curl -I https://swindonblockeddrains.co.uk/location/swindon/
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
