<template>
  <Application>
    <template #settings-append>
      <div id="collapse-settings" class="collapse show">
        <div>
          <form autocomplete="off">
            <div role="tablist" class="card border mb-2">
              <div id="collapse-0" class="card-body collapse show">
                <div>
                  <div>
                    <div class="form-group">
                      <h3>{{ i19spreadsheetImport }} (CSV/XLSX)</h3>
                      <b-form-file
                        class="mb-2"
                        v-model="file"
                        accept=".csv, .xlsx"
                        :placeholder="`${i19choseTheFile}...`"
                        :drop-placeholder="`${i19dropFileMsg}...`"
                      />
                      <a href="https://firebasestorage.googleapis.com/v0/b/ecom-feed-importer.appspot.com/o/public%2Ftemplate.csv?alt=media&token=85526ea3-ce75-4724-8184-cbae766e78fa">
                        <i class="fa fa-table mr-1"></i> {{ i19examplteTable }}
                      </a>
                    </div>
                    <button class="btn btn-primary" type="submit" @click="uploadFile">
                      <span class="d-inline-block" style="width: 1.15rem">
                        <i class="fa fa-floppy-o"></i>
                      </span>
                      <slot name="submit-label">
                        {{ i19save }}
                      </slot>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </template>
  </Application>
</template>

<script src="./js/AppFeedImporter.js"></script>
