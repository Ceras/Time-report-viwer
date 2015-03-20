package backend

import com.dropbox.core.DbxClient
import com.dropbox.core.DbxRequestConfig
import grails.transaction.Transactional

@Transactional
class DropboxService {
    private String accessToken = 'ZFMLm8JBu2kAAAAAAAAUHpJGwM9dNMSkoDxE92O-2aAW1-zY37Rzmy0NlOfjCmDp'

    List<File> downloadFiles(String timeReportsPath) {
        List fileEntries = getEntriesFromDropboxFolderPath(timeReportsPath)

        fileEntries.collect{ fileEntry ->
            String fileName = fileEntry.path.replaceAll("(?i)" + timeReportsPath + "/", '')
            if(isTimeReportFile(fileName)){
                downloadFile(fileEntry, fileName)
            }
        }
    }

    File downloadFile(fileEntry, String fileName) {
        DbxClient client = new DbxClient(getConfig(), accessToken);

        FileOutputStream outputStream = new FileOutputStream(fileName);
        client.getFile(fileEntry.path, null, outputStream);
        outputStream.close();
        new File(fileName) // Create and return a file object
    }


    private static isTimeReportFile(String fileName){
        fileName = fileName.toLowerCase()
        fileName.contains('.xls') &&
                fileName.contains('tidrapport') &&
                !fileName.contains('konfliktkopia') &&
                !fileName.contains('conflicted copy')

    }

    private List getEntriesFromDropboxFolderPath(String path){
        DbxClient client = new DbxClient(getConfig(), accessToken);

        client.getMetadataWithChildren(path).children
    }

    private static DbxRequestConfig getConfig() {
        new DbxRequestConfig( "TimeReportViewer/1.0", Locale.getDefault().toString());
    }
}